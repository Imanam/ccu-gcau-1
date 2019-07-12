/* jshint esversion: 6 */

import ReacTer from "@labzdjee/reac-ter";
import Vue from "vue";
import axios from "axios";
import {
  initVue
} from "./main.js";

export const tsvMap = {};
export const tdsData = new ReacTer();

const privateTdsData = {};

export const reactiveData = new ReacTer();

export const dataKeys = [];
export const eventBus = new Vue({
  methods: {
    dataChanged(item) {
      this.$emit("item-should-update", item);
    },
  },
});

export const selectChoices = {
  languages: [
    "English",
    "Dutch",
    "Spanish",
    "Italian",
    "Finnish",
    "Swedish",
    "French",
    "German",
    "Slovakian",
    "USA",
    "Norwegian",
    "Portuguese",
  ],
  relayNumbers: [...Array(17)].map((_, i) => i.toString()),
  commVelocity: ["1200", "2400", "4800", "9600", "19200"],
  batteryType: [
    "None",
    "VO",
    "Ni CD (SBH-SBM)",
    "Ni CD (SBL)",
    "Ni CD (SPH)",
    "Ni CD (SLM)",
    "Seald lead acid",
    "Open lead acid",
  ],
  acVoltage: ["110", "120", "127", "208", "220", "230", "240", "380", "400", "440", "460", "480", "660"],
  dcCurrent: ["5", "10", "15", "25", "35", "50", "75", "100", "125", "150", "200", "250", "300", "400", "500"],
  periodicTimer: ["None", "1", "6", "12"],
};

let initTdsDataDone = false;

function initTdsData() {
  if (initTdsDataDone === false) {
    Object.keys(tsvMap).forEach((key) => {
      privateTdsData[key] = null;
      reactiveData.addProperty(privateTdsData, key);
      dataKeys.push(key);
    });
    initTdsDataDone = true;
  }
}

const _metaData = {
  testKey: "Text_Projet",
  testValue: "???",
};

Object.keys(_metaData).forEach((key) => {
  reactiveData.addProperty(_metaData, key, `meta_${key}`);
});

export function processTdsFile(fileContents) {
  const lines = fileContents.toString().split("\n");
  const pattLabel = /<Label>(.*)<\/Label>/i;
  const pattData = /<Donnee>(.*)<\/Donnee>/i;
  const pattDataStart = /<Donnee>(.*)/i;
  const pattDataEnd = /(.*)<\/Donnee>/i;
  const commaFloatPattern = /(\d*),(\d*)/;
  const rightTrimPattern = /\s*$/;
  let label;
  let data;
  let partial;
  lines.forEach((line) => {
    const trimmedLine = line.replace(rightTrimPattern, ""); // remove space
    const resultLabel = trimmedLine.match(pattLabel);
    if (resultLabel) {
      label = resultLabel[1];
      partial = false;
    }
    if (label !== null) {
      const resultData = trimmedLine.match(pattData);
      // even if the value of <Donnee> is empty, it returns empty string
      if (resultData) {
        data = resultData[1];
        // to replace "true", "false" of the result of boolean in .tdsa which have been "0" or "1"
        if (label.strtsWith("Check_") && data !== "true" && data !== "false") {
          if (data === "1") {
            data = "true";
          } else {
            data = "false";
          }
        }
        //to replace "," in .tdsa to "."
        if (tsvMap[label].P0Type === "float") {
          const matches = data.match(commaFloatPattern);
          if (matches) {
            data = `${matches[1]}.${matches[2]}`;
          }
        }
        if (label !== null) {
          reactiveData[label] = data;
          label = null;
        }
      } else {
        // in case the value of <Donnee> is multiline.
        const resultDataStart = trimmedLine.match(pattDataStart);
        if (resultDataStart) {
          // to catch the first line after <Donnee> open tag
          data = resultDataStart[1];
          partial = true;
        } else if (partial) {
          const resultDataEnd = trimmedLine.match(pattDataEnd);
          if (resultDataEnd) {
            partial = false;
            reactiveData[label] = `${data}\r${resultDataEnd[1]}`;
          } else {
            data = `${data}\r${trimmedLine}`;
          }
        }
      }
    }
  });
}

axios
  .get(`${process.env.BASE_URL}/TDSP0APPMap.tsv`)
  .then((response) => {
    const tsv = response.data;
    const lines = tsv.split("\n");
    // to separate the 1st line to make headers[]
    const headers = lines[0].replace(/\r$/, "").split("\t");
    let key;
    let object;
    // to iterate line by line from seconde without 1st line
    for (let i = 1; i < lines.length; i++) {
      object = {};
      key = "";
      const currentline = lines[i].replace(/\r$/, "").split("\t");
      for (let j = 0; j < headers.length; j++) {
        // to creat object {header[x]:currentline[x]...}
        object[headers[j]] = currentline[j];
        if (headers[j] === "TDSTag") {
          // to prepare key to creat dictionary
          key = currentline[j];
        }
      }
      //if the key is not empty and does not start with "x---, creates dictionary
      if (key.length > 0 && key.startsWith("x--") === false) {
        tsvMap[key] = object;
      }
    }

    initTdsData();
    initVue();
    axios.get(`${process.env.BASE_URL}/template.tdsa`).then((reply) => {
      processTdsFile(reply.data);
    });
  })
  .catch((error) => {
    document.getElementById("app").innerHTML =
      "panic: cannot initialize app from definition files like TDSP0APPMap.tsv or template.tdsa";
    // eslint-disable-next-line
    console.log(error);
  });