<template>
  <div id="app">
    <CompaniesComponent @click="onEventHappen" />
    <StaffComponent @click="onEventHappen" />
  </div>
</template>

<script>
// import the Companies component
import Companies from "./components/Companies";
// import the Staff component
import Staff from "./components/Staff";
// import the higher order component
import HoComponent from "./components/HoComponent.js";

// import the source data from mockData only to be used for event handlers
import sourceData from "./components/mockData.js";

// Create a const variable which contains the Companies component wrapped in the higher order component
const CompaniesComponent = HoComponent(Companies, mockData =>
  mockData.getCompanies()
);

// Create a const variable which contains the Staff component wrapped in the higher order component
const StaffComponent = HoComponent(Staff, mockData => mockData.getStaff());

export default {
  name: "App",
  components: {
    CompaniesComponent,
    StaffComponent
  },
  methods: {
    onEventHappen(value) {
      let setFunction = sourceData[value.name];
      setFunction(value.id);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
