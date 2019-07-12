<template>
  <v-container>
    <!-- start of left part-->
    <v-layout row wrap>
      <v-flex md6>
        <v-card>
          <v-layout pa-3 ma-1>
            <v-flex xs12 md6 px-1>
              <vyw-numeric-input
                data-key="Edit_NUM_ESCLAVE"
                label="Slave number"
                :bottom="Number(-30)"
                :top="Number(60)"
                hint="[-30; +60]"
                :on-changed="valueChanged"
              />
            </v-flex>
            <v-flex xs12 md6 px-1>
              <vyw-select-input
                data-key="Combo_BAUDRATE"
                label="Communication velocity"
                :item-list="selectChoices.commVelocity"
                :on-changed="valueChanged"
              />
            </v-flex>
          </v-layout>
        </v-card>
        <v-card>
          <v-layout pa-3 ma-1>
            <v-flex xs12 md6 px-1>
              <vyw-select-input
                data-key="Combo_LANGUE"
                label="Language"
                :item-list="selectChoices.languages"
                hint="local language"
                :on-changed="valueChanged"
              />
            </v-flex>
          </v-layout>
        </v-card>
        <v-card>
          <v-layout pa-3 ma-1>
            <v-flex xs12 md6 px-1>
              <vyw-select-input
                data-key="Combo_RN_UAC"
                label="AC voltage"
                :item-list="selectChoices.acVoltage"
                :on-changed="valueChanged"
              />
            </v-flex>
            <v-flex xs12 md6 px-1>
              <vyw-select-input
                data-key="Combo_RN_IDC"
                label="DC current"
                :item-list="selectChoices.dcCurrent"
                :on-changed="valueChanged"
              />
            </v-flex>
          </v-layout>
        </v-card>
        <v-card>
          <v-layout pa-3 ma-1>
            <v-flex xs12 md6 px-1>
              <vyw-numeric-input
                data-key="Edit_SHUNT_SR"
                :bottom="0.5"
                :top="9999"
                label="Rectifier shunt"
                suffix="A"
                hint="0.5 - 9999"
                :on-changed="valueChanged"
              />
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
      <!-- </v-layout> -->
      <!-- end of left part  -->
      <!-- intersection -->
      <!-- start of right part -->
      <v-flex md6>
        <v-card>
          <v-layout pa-3 ma-1 align-center>
            <v-flex xs12 px-1>
              <vyw-checkbox data-key="Check_SDM_TR" label="AC Meter" :on-changed="valueChanged" />
            </v-flex>
            <v-flex xs12 px-1>
              <vyw-checkbox
                data-key="Check_SDM_TU"
                label="Load voltage"
                :on-changed="valueChanged"
              />
            </v-flex>
            <v-flex xs12 px-1>
              <vyw-checkbox
                data-key="Check_SHUNT_SB"
                label="Capacity(Ah) measurement"
                :on-changed="valueChanged"
              />
            </v-flex>
          </v-layout>
        </v-card>
        <v-card>
          <v-layout pa-3 ma-1 row wrap>
            <v-flex xs12 md6 px-1>
              <vyw-checkbox
                data-key="Check_ADJ_MCV"
                label="Variable current mode"
                :on-changed="valueChanged"
              />
            </v-flex>
            <v-flex xs12 md6 px-1>
              <vyw-checkbox
                data-key="Check_ADJ_MTV"
                label="Variable voltage mode"
                :on-changed="valueChanged"
              />
            </v-flex>
            <v-flex xs12 md6 px-1>
              <vyw-numeric-input
                data-key="Edit_ADJ_UMIN"
                :bottom="0.5"
                :top="9999"
                label="Umin"
                suffix="V"
                hint="0.5 - 9999"
                :on-changed="valueChanged"
              />
            </v-flex>
            <v-flex xs12 md6 px-1>
              <vyw-numeric-input
                data-key="Edit_ADJ_UMAX"
                :bottom="0.5"
                :top="9999"
                label="Umax"
                suffix="V"
                hint="0.5 - 9999"
                :on-changed="valueChanged"
              />
            </v-flex>
          </v-layout>
        </v-card>
        <v-card>
          <v-layout pa-3 ma-1>
            <v-flex>
              <vyw-checkbox
                data-key="Check_AR_DRED"
                label="Rectifier failure"
                :on-changed="valueChanged"
              />
            </v-flex>
            <v-flex>
              <vyw-checkbox
                data-key="Check_AR_DRES"
                label="Main failure"
                :on-changed="valueChanged"
              />
            </v-flex>
            <v-flex>
              <vyw-checkbox
                data-key="Check_AR_TMDC"
                label="High DC Voltage"
                :on-changed="valueChanged"
              />
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
    <!-- end of left part -->
  </v-container>
</template>

<script>
import VywNumericInput from "./basics/vyw-numeric-input";
import VywSelectInput from "./basics/vyw-default-select";
import VywSwitch from "./basics/vyw-switch";
import VywCheckbox from "./basics/vyw-checkbox";
import { selectChoices } from "../data";
import { implementValueChanged } from "../mixins";

export default {
  components: {
    VywNumericInput,
    VywSelectInput,
    VywSwitch,
    VywCheckbox,
  },
  data: () => ({
    selectChoices,
  }),
  mixins: [implementValueChanged],
};
</script>

<style scoped>
</style>
