
<template>
  <div id="surveyjsEditorContainer" />
</template>

<script>
import * as SurveyJSEditor from "surveyjs-editor";
import "surveyjs-editor/surveyeditor.css";
import "../assets/index.scss";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  mounted() {
    let editorOptions = {};
    SurveyJSEditor.StylesManager.applyTheme("bootstrapmaterial");

    let editor = new SurveyJSEditor.SurveyEditor(
      "surveyjsEditorContainer",
      editorOptions
    );
    editor.saveSurveyFunc = () => {
      //   console.log(JSON.stringify(editor.text));
    };
  }
};
</script>

<style scoped>
#surveyjsEditorContainer {
  font-size: 18px;
}
</style>
