
<template>
  <div id="surveyjsEditorContainer" />
</template>

<script>
import * as SurveyEditor from "surveyjs-editor";
import "surveyjs-editor/surveyeditor.css";
import "../assets/index.scss";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  mounted() {
  var mainColor = "#023670";
  var mainHoverColor = "#035bbc";
  var textColor = "#4a4a4a";
  var headerColor = "#160ce8";
  var headerBackgroundColor = "#4a4a4a";
  var bodyContainerBackgroundColor = "#f8f8f8";

  var defaultThemeColorsSurvey = Survey.StylesManager.ThemeColors["default"];
  defaultThemeColorsSurvey["$main-color"] = mainColor;
  defaultThemeColorsSurvey["$main-hover-color"] = mainHoverColor;
  defaultThemeColorsSurvey["$text-color"] = textColor;
  defaultThemeColorsSurvey["$header-color"] = headerColor;
  defaultThemeColorsSurvey["$header-background-color"] = headerBackgroundColor;
  defaultThemeColorsSurvey[
    "$body-container-background-color"
  ] = bodyContainerBackgroundColor;

  var defaultThemeColorsEditor =
    SurveyEditor.StylesManager.ThemeColors["default"];
  defaultThemeColorsEditor["$primary-color"] = mainColor;
  defaultThemeColorsEditor["$secondary-color"] = mainColor;
  defaultThemeColorsEditor["$primary-hover-color"] = mainHoverColor;
  defaultThemeColorsEditor["$primary-text-color"] = textColor;
  defaultThemeColorsEditor["$selection-border-color"] = mainColor;


    let editorOptions = {};
    Survey.Survey.cssType = "bootstrapmaterial";
  Survey.StylesManager.applyTheme("bootstrapmaterial");
  SurveyEditor.StylesManager.applyTheme("bootstrapmaterial");

    let editor = new SurveyEditor.SurveyEditor(
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
