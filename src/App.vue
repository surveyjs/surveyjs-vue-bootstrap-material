<template>
  <div id="app">
    <img src="./assets/logo.png">
      <!-- <div class="alert alert-primary" role="alert">
        This is a primary alert—check it out!
      </div> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <SurveyEditor />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import SurveyEditor from "./components/SurveyEditor.vue";

export default {
  name: "app",
  components: {
    SurveyEditor
  }
};
</script>

<style>
item-editor span {
  position: relative;
}
</style>
