import Vue from "vue";
import mockData from "./mockData.js";

const HoComponent = (component, fetchData) => {
  return Vue.component("HoComponent", {
    render(createElement, context) {
      return createElement(component, {
        props: {
          returnedData: this.returnedData
        },
        on: { ...this.$listeners }
      });
    },
    data() {
      return {
        returnedData: fetchData(mockData)
      };
    }
  });
};

export default HoComponent;
