<template>
  <v-container>
    <v-layout row wrap>
      <v-flex md6>
        <!-- first -->
        <v-card>
          <v-layout pa-3 ma-1>
            <v-flex>
              <vyw-checkbox
                data-key="Option_1_elemt"
                label="Option_1_elemt"
                :on-changed="valueChanged"
                :disabled="false"
              />
            </v-flex>

            <v-flex xs12 md6 px-1>
              <vyw-numeric-input
                data-key="Edit_QDB_NDC"
                :bottom="0.5"
                :top="9999"
                label="Number of celles"
                hint="0.5 - 9999"
                :on-changed="valueChanged"
                :disabled="qdbGroupDisabled"
              />
            </v-flex>
          </v-layout>
        </v-card>

        <!-- seconde -->
        <v-card>
          <v-layout pa-3 ma-1 row wrap>
            <v-flex xs12 md6 px-1>
              <vyw-numeric-input
                data-key="Edit_DEF_CB"
                :bottom="0.5"
                :top="9999"
                label="Battery capacity"
                suffix="Ah"
                hint="0.5 - 9999"
                :on-changed="valueChanged"
              />
            </v-flex>
            <v-flex xs12 md6 px-1>
              <vyw-checkbox
                data-key="Check_SHUNT_SB"
                label="Battery shunt value"
                :on-changed="valueChanged"
                :disabled="false"
              />
            </v-flex>

            <v-flex xs12 md6 px-1>
              <vyw-numeric-input
                data-key="Edit_SHUNT_SB"
                :bottom="0.5"
                :top="9999"
                label="Battery shunt"
                suffix="A"
                hint="0.5 - 9999"
                :on-changed="valueChanged"
                :disabled="shuntGroupDisabled"
              />
            </v-flex>
            <v-flex xs12 md6 px-1>
              <vyw-numeric-input
                data-key="Edit_SHUNT_CN"
                :bottom="0.5"
                :top="9999"
                label="Battery current limit"
                suffix="A"
                hint="0.5 - 9999"
                :on-changed="valueChanged"
              />
            </v-flex>

            <v-flex xs12 md6 px-1>
              <vyw-numeric-input
                data-key="Edit_DEF_TDFLPE"
                :bottom="0.5"
                :top="9999"
                label="Floating charge voltage/cell"
                suffix="A"
                hint="0.5 - 9999"
                :on-changed="valueChanged"
              />
            </v-flex>
          </v-layout>
        </v-card>

        <!-- third VO setting -->
        <v-card>
          <v-layout pa-3 ma-1 row wrap>
            <v-flex xs12 md6 px-1>
              <vyw-numeric-input
                data-key="Edit_OPBVO_DELTA"
                :bottom="1"
                :top="9999"
                label="DT min"
                suffix="°C"
                hint="1 - 9999"
                :on-changed="valueChanged"
              />
            </v-flex>
            <v-flex xs12 md6 px-1>
              <vyw-numeric-input
                data-key="Edit_OPBVO_TDC"
                :bottom="1"
                :top="9999"
                label="DT max"
                suffix="°C"
                hint="1 - 9999"
                :on-changed="valueChanged"
              />
            </v-flex>
            <v-flex xs12 md6 px-1>
              <vyw-numeric-input
                data-key="Edit_OPBVO_CL"
                :bottom="0.5"
                :top="9999"
                label="Current limit"
                suffix="A"
                hint="0.5 - 9999"
                :on-changed="valueChanged"
              />
            </v-flex>
            <v-flex xs12 md6 px-1>
              <vyw-numeric-input
                data-key="Edit_OPBVO_CL"
                :bottom="1"
                :top="9999"
                label="Extra time"
                suffix="H"
                hint="1 - 9999"
                :on-changed="valueChanged"
              />
            </v-flex>
          </v-layout>
        </v-card>

        <!--  fourth -->

        <v-card>
          <v-layout pa-3 ma-1 row wrap>
            <v-flex>
              <vyw-checkbox
                data-key="Check_RCDF"
                label="Commissioning"
                :on-changed="valueChanged"
                :disabled="false"
              />
            </v-flex>

            <v-flex xs12 md6 px-1>
              <vyw-numeric-input
                data-key="Edit_DEF_TDFOPE"
                :bottom="0.5"
                :top="9999"
                label="Commissioning charge voltage/cell"
                suffix="V"
                hint="0.5 - 9999"
                :on-changed="valueChanged"
                :disabled="commGroupDisabled"
              />
            </v-flex>

            <v-flex xs12 md6 px-1>
              <vyw-numeric-input
                data-key="Edit_DEF_CDCDF"
                :bottom="0.5"
                :top="9999"
                label="Commissioning charge current"
                suffix="A"
                hint="0.5 - 9999"
                :on-changed="valueChanged"
                :disabled="commGroupDisabled"
              />
            </v-flex>
            <v-flex xs12 md6 px-1>
              <vyw-select-input
                data-key="Combo_RCDF_REL"
                label="Commissioning relay"
                :item-list="selectChoices.relayNumbers"
                :on-changed="valueChanged"
                :disabled="commGroupDisabled"
              />
            </v-flex>
            <v-flex xs12 md6 px-1>
              <vyw-numeric-input
                data-key="Edit_DEF_CDCDF"
                :bottom="1"
                :top="9999"
                label="Commissioning charge time"
                suffix="H"
                hint="1 - 9999"
                :on-changed="valueChanged"
                :disabled="commGroupDisabled"
              />
            </v-flex>
          </v-layout>
        </v-card>

        <!--fifth Temperature compensation-->

        <v-card>
          <v-layout pa-3 ma-1 row wrap>
            <v-flex>
              <vyw-checkbox
                data-key="Check_DEF_CET"
                label="Temperature compensation"
                :on-changed="valueChanged"
                :disabled="false"
              />
            </v-flex>

            <v-flex xs12 md6 px-1>
              <vyw-numeric-input
                data-key="Edit_TB_TMT"
                :bottom="1"
                :top="9999"
                suffix="%/°C"
                hint="0.5 - 9999"
                :on-changed="valueChanged"
                :disabled="tempCompGroupDisabled"
              />
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
      <!-- sixth Test-->
      <v-flex md6>
        <v-card>
          <v-layout pa-3 ma-1 row wrap>
            <v-flex>
              <vyw-checkbox
                data-key="Check_TB"
                label="Test"
                :on-changed="valueChanged"
                :disabled="false"
              />
            </v-flex>
            <v-flex xs12 md6 px-1>
              <vyw-integer-input
                data-key="Combo_TB_TP"
                :stepper="{down: 1, up: 1}"
                :bottom="0"
                :top="12"
                label="Period"
                suffix="month(s)"
                hint="0 - 12"
                :on-changed="valueChanged"
                :disabled="testGroupDisabled"
              />
            </v-flex>
            <v-flex xs12 md6 px-1>
              <vyw-numeric-input
                data-key="Edit_TB_PDD"
                :bottom="0.5"
                :top="9999"
                label="If current limit occurs at least"
                suffix="%"
                hint="0.5 - 9999"
                :on-changed="valueChanged"
                :disabled="testGroupDisabled"
              />
            </v-flex>
            <v-flex xs12 md6 px-1>
              <vyw-numeric-input
                data-key="Edit_TB_TMT"
                :bottom="0.5"
                :top="9999"
                label="Test end voltage"
                suffix="V"
                hint="0.5 - 9999"
                :on-changed="valueChanged"
                :disabled="testGroupDisabled"
              />
            </v-flex>
            <v-flex xs12 md6 px-1>
              <vyw-numeric-input
                data-key="Edit_TB_NTA"
                :bottom="0.5"
                :top="9999"
                label="Discharge end voltage alarm"
                suffix="V"
                hint="0.5 - 9999"
                :on-changed="valueChanged"
                :disabled="testGroupDisabled"
              />
            </v-flex>
          </v-layout>
        </v-card>
        <!-- seventh -->
        <v-card>
          <v-layout pa-3 ma-1 row wrap>
            <v-flex>
              <vyw-checkbox
                data-key="Check_DEF_CM"
                label="Highrate manual charge"
                :on-changed="valueChanged"
                :disabled="false"
              />
            </v-flex>
            <v-flex>
              Automatic start
              <vyw-checkbox
                data-key="Check_DEF_TLCPE"
                label="If current limit occurs at least:"
                :on-changed="valueChanged"
                :disabled="false"
              />
            </v-flex>
            <v-flex xs12 md6 px-1>
              <vyw-numeric-input
                data-key="Edit_DEF_TLCPE"
                label="If current limit occurs at least:"
                :bottom="0.5"
                :top="9999"
                suffix="S"
                hint="0.5 - 9999"
                :on-changed="valueChanged"
                :disabled="testGroupDisabled"
              />
            </v-flex>
            <v-flex>
              <vyw-checkbox
                data-key="Check_DEF_TARPE"
                label="If mains failure occurs at least"
                :on-changed="valueChanged"
                :disabled="false"
              />
            </v-flex>
            <v-flex xs12 md6 px-1>
              <vyw-numeric-input
                data-key="Edit_DEF_TARPE"
                :bottom="0.5"
                :top="9999"
                label="If mains failure occurs at least"
                suffix="S"
                hint="0.5 - 9999"
                :on-changed="valueChanged"
                :disabled="testGroupDisabled"
              />
            </v-flex>

            <v-flex xs12 md6 px-1>
              <vyw-select-input
                data-key="Combo_DEF_CP"
                label="Periodic timer"
                :item-list="selectChoices.periodicTimer"
                :on-changed="valueChanged"
              />
            </v-flex>
          </v-layout>
        </v-card>
        <!-- eigth -->
        <v-card>
          <v-layout pa-3 ma-1 row wrap>
            <v-flex>
              <vyw-checkbox
                data-key="Option_DEF_DIRECT"
                label="Timer mode : direct"
                :on-changed="valueChanged"
                :disabled="highRateChargeGroupDisabled"
              />
            </v-flex>
            <v-flex xs12 md6 px-1>
              <vyw-select-input
                data-key="Combo_RCE_REL"
                label="High rate charge relay"
                :item-list="selectChoices.relayNumbers"
                :on-changed="valueChanged"
                :disabled="highRateChargeGroupDisabled"
              />
            </v-flex>
            <v-flex xs12 md6 px-1>
              <vyw-numeric-input
                data-key="Edit_DEF_TEPE"
                label="High rate charge voltage/cell"
                :bottom="0.5"
                :top="9999"
                suffix="V"
                hint="0.5 - 9999"
                :on-changed="valueChanged"
                :disabled="highRateChargeGroupDisabled"
              />
            </v-flex>
            <v-flex xs12 md6 px-1>
              <vyw-numeric-input
                data-key="Edit_DEF_TDREE"
                label="High rate charge time"
                :bottom="0.5"
                :top="9999"
                suffix="H"
                hint="0.5 - 9999"
                :on-changed="valueChanged"
                :disabled="highRateChargeGroupDisabled"
              />
            </v-flex>
            <v-flex xs12 md6 px-1>
              <vyw-numeric-input
                data-key="Edit_DEF_battFanDelay"
                label="Battery fan delay"
                :bottom="0.5"
                :top="9999"
                suffix="H"
                hint="0.5 - 9999"
                :on-changed="valueChanged"
                :disabled="highRateChargeGroupDisabled"
              />
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import VywNumericInput from "./basics/vyw-numeric-input";
import VywSelectInput from "./basics/vyw-default-select";
// import VywSwitch from "./basics/vyw-switch";
import VywCheckbox from "./basics/vyw-checkbox";
import VywIntegerInput from "./basics/vyw-integer-input";

import { selectChoices } from "../data";
import { implementValueChanged } from "../mixins";
import { reactiveData } from "../data";

export default {
  components: {
    VywNumericInput,
    VywCheckbox,
    VywSelectInput,
    VywIntegerInput,
  },
  data: () => ({
    selectChoices,
    shuntGroupDisabled: true,
    qdbGroupDisabled: true,
    commGroupDisabled: true,
    testGroupDisabled: true,
    tempCompGroupDisabled: true,
    highRateChargeGroupDisabled: true,
    disablableGroups: [
      { check: "Check_SHUNT_SB", groups: ["shuntGroupDisabled"] },
      { check: "Option_1_elemt", groups: ["qdbGroupDisabled"] },
      { check: "Check_RCDF", groups: ["commGroupDisabled"] },
      { check: "Check_TB", groups: ["testGroupDisabled"] },
      { check: "Check_DEF_CET", groups: ["tempCompGroupDisabled"] },
      { check: "Check_DEF_CM", groups: ["highRateChargeGroupDisabled"] },
    ],
  }),
  methods: {
    disableManager(value, oldValue, key) {
      for (let i = 0; i < this.disablableGroups.length; i++) {
        if (key === this.disablableGroups[i].check) {
          const groups = this.disablableGroups[i].groups;
          for (let j = 0; j < groups.length; j++) {
            this[groups[j]] = value !== "true";
          }
        }
      }
    },
  },
  mixins: [implementValueChanged],
  created() {
    for (let i = 0; i < this.disablableGroups.length; i++) {
      const key = this.disablableGroups[i].check;
      // with this, every alteration of reactiveData[this.dataKey] will update component
      reactiveData.$watchers[key].push(this.disableManager);
      // ensure initialization upon component creation
      this[this.disablableGroups[i].group] = reactiveData[key];
    }
  },
  beforeDestroy() {
    // clean up of reactive hook
    const reactiveFunction = this.disableManager;
    for (let j = 0; j < this.disablableGroups.length; j++) {
      let watcherArray = reactiveData.$watchers[this.disablableGroups[j].check];
      for (let i = 0; i < watcherArray.length; i++) {
        if (watcherArray[i] === reactiveFunction) {
          watcherArray.splice(i, 1); // remove function
          break;
        }
      }
    }
  },
};
</script>