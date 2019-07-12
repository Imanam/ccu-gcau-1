<template>
  <v-checkbox
    :label="label"
    box
    @change="changed"
    :hint="hint"
    v-model="editedValue"
    :color="colorWhenOn"
    :disabled="disabled"
  />
</template>

<script>
import { reacterAttach } from "../../mixins";

export default {
  props: {
    dataKey: { type: String, required: true }, // key on reactiveData
    label: String,
    hint: String,
    colorWhenOn: String,
    onChanged: {
      type: Function,
      default: function(/* keyValueObject */) {},
    },
    disabled: { type: Boolean, default: false },
  },
  data: () => ({
    editedValue: undefined,
    externalType: "boolean",
  }),
  computed: {
    typedValue() {
      const value = this.editedValue;
      switch (this.externalType) {
        case "number":
          return value ? 1 : 0;
        case "stringLiteral":
          return value ? "true" : "false";
        case "stringNumeric":
          return value ? "1" : "0";
        default:
        case "boolean":
          return value;
      }
    },
  },
  methods: {
    changed() {
      if (typeof this.onChanged === "function") {
        this.onChanged({ dataKey: this.dataKey, value: this.typedValue });
      }
    },
    reactOnNewData(newData) {
      switch (typeof newData) {
        case "number":
          this.editedValue = newData !== 0;
          this.externalType = "number";
          break;
        case "string":
          this.editedValue = ["false", "0"].indexOf(newData.toLowerCase()) === -1;
          this.externalType = isNaN(newData) ? "stringLiteral" : "stringNumeric";
          break;
        case "boolean":
          this.editedValue = newData;
          this.externalType = "boolean";
          break;
        default:
          this.editedValue = false;
          break;
      }
    },
  },
  mixins: [reacterAttach],
};
</script>

<style scoped>
</style>