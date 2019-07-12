<template>
  <div>
    <v-card>
      <v-container>
        <!-- <v-layout text-xs-center align-content-center row wrap> -->
        <v-layout text-xs-center align-content-center>
          <v-flex px-1 md7>
            <v-container pa-0>
              <v-layout align-start justify-space-around row wrap>
                <!-- <v-flex md12 pb-3 text-xs-left pl-0 v-show="tdsFileName.length>0"> -->
                <v-flex md12 pb-3 text-xs-left pl-0>
                  <v-card color="blue-grey lighten-4" class="black--text">
                    <v-card-text class="pl-2 elevation-6">
                      <span class="font-italic">Imported file:</span> &nbsp;
                      <span class="body-2 blue-grey--text text-darken-4">{{tdsFileName}}</span>
                      <span v-show="contentsAltered">
                        &nbsp;
                        <v-icon small>star</v-icon>
                        <v-icon small>star</v-icon>
                      </span>
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex md6 pa-1>
                  <vyw-text-input
                    data-key="Text_Nom"
                    label="Name"
                    hint="Project manager"
                    :on-changed="valueChanged"
                  />
                </v-flex>
                <v-flex md6 pa-1>
                  <vyw-text-input
                    data-key="Text_Commande"
                    label="Order"
                    :on-changed="valueChanged"
                  />
                </v-flex>
                <v-flex md6 pa-1>
                  <vyw-text-input
                    data-key="Text_Origine"
                    label="Origin"
                    :on-changed="valueChanged"
                  />
                </v-flex>
                <v-flex md6 pa-1>
                  <vyw-text-input
                    data-key="Text_Projet"
                    label="Project"
                    hint="Main reference"
                    :on-changed="valueChanged"
                  />
                </v-flex>
                <v-flex md6 pa-1>
                  <vyw-text-input
                    data-key="Text_Devis"
                    label="Quotation"
                    :on-changed="valueChanged"
                  />
                </v-flex>
                <v-flex md6 pa-1>
                  <vyw-text-input
                    data-key="Text_ClientFinal"
                    label="Customer"
                    hint="Main reference"
                    :on-changed="valueChanged"
                  />
                </v-flex>
                <v-flex md6 pa-1>
                  <vyw-text-input
                    data-key="Text_Client"
                    label="Customer"
                    hint="Main reference"
                    :on-changed="valueChanged"
                  />
                </v-flex>
                <v-flex md6 pa-1>
                  <vyw-text-input
                    data-key="SystemId"
                    label="Identification number"
                    hint="Main reference"
                    :on-changed="valueChanged"
                  />
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
          <v-flex px-1 md5>
            <v-container pa-0>
              <v-layout column wrap fill-height>
                <v-flex pa-1>
                  <vyw-text-area
                    data-key="Edit_COMMENT"
                    label="Notes"
                    hint="project notes/comments"
                    :on-changed="valueChanged"
                  />
                </v-flex>
                <v-flex>
                  <vyw-checkbox
                    data-key="Check_APP"
                    label="Approved by"
                    :on-changed="valueChanged"
                  />
                </v-flex>
                <v-flex md3>
                  <vyw-text-input
                    data-key="Edit_CONTROL"
                    hint="Main reference"
                    :on-changed="valueChanged"
                  />
                </v-flex>
                <v-flex>
                  <vyw-checkbox
                    data-key="Check_MAJ"
                    label="ME 10 file follow-up"
                    :on-changed="valueChanged"
                  />
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import VywTextArea from "./basics/vyw-text-area";
import VywTextInput from "./basics/vyw-text-input";
import VywCheckbox from "./basics/vyw-checkbox";
import VywSwitch from "./basics/vyw-switch";
import { implementValueChanged } from "../mixins";

export default {
  props: { tdsFileName: String, contentsAltered: Boolean },
  components: {
    VywTextArea,
    VywTextInput,
    VywCheckbox,
    VywSwitch,
  },
  mixins: [implementValueChanged],
};
</script>

<style scoped>
</style>
