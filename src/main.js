/* eslint-disable */
import Vue from "vue";
import App from "./App.vue";
// import "bootstrap/dist/css/bootstrap.css";

// import "bootstrap-material-design/dist/js/material.js";
// import "bootstrap-material-design/dist/js/ripples.js";

// import "bootstrap-material-design/dist/css/bootstrap-material-design.css";
// import "bootstrap-material-design/dist/css/ripples.css";

// window.$ = require("jquery");
// window.JQuery = require("jquery");

Vue.config.productionTip = false;
new Vue({
  render: h => h(App)
}).$mount("#app");

window.Survey = require("survey-knockout");
