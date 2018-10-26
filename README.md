# VueJS + SurveyJS/SurveyJS_Editor + Bootstrap Material QuickStart Source
[![Build Status][travis-badge]][travis-badge-url]

## How to run this sample application
 - git clone https://github.com/surveyjs/surveyjs-vue-bootstrap-material.git
 - cd surveyjs-vue-bootstrap-material
 - npm i
 - npm run dev
 - open http://localhost:8080/ in your web browser


For detailed explanation on how VueJS things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Add survey component on your page

### index.html
```HTML
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <link rel="icon" href="<%= BASE_URL %>favicon.ico">
  <title>surveyjs-vue-bootstrap-material</title>
  <script src="https://unpkg.com/jquery"></script>
  <link rel="stylesheet" href="https://unpkg.com/bootstrap@3.3.7/dist/css/bootstrap.min.css">
  <script src="https://unpkg.com/bootstrap-material-design@0.5.10/dist/js/material.js"></script>
  <script src="https://unpkg.com/bootstrap-material-design@0.5.10/dist/js/ripples.js"></script>
  <link rel="stylesheet" href="https://unpkg.com/bootstrap-material-design@0.5.10/dist/css/bootstrap-material-design.css">
  <link rel="stylesheet" href="https://unpkg.com/bootstrap-material-design@0.5.10/dist/css/ripples.css">
</head>

<body>
  <noscript>
    <strong>We're sorry but my-project doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
  </noscript>
  <div id="app"></div>
  <!-- built files will be auto injected -->
</body>

<script>
  window.$.material.init();
</script>

</html>
```

### VueJS component
```JavaScript
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- If you want to show survey, uncomment the line below -->
    <!-- <survey :survey="survey"></survey> -->
    <!-- If you want to show survey editor, uncomment the line below -->
    <!-- <survey-editor></survey-editor> -->
    <survey-editor></survey-editor>
  </div>
</template>

<script>
//In your VueJS App.vue or yourComponent.vue file add these lines to import
import SurveyEditor from './components/SurveyEditor'
import * as SurveyVue from 'survey-vue'
import 'bootstrap/dist/css/bootstrap.css';

var Survey = SurveyVue.Survey
Survey.cssType = "bootstrap";

//If you want to add custom widgets package
//Add these imports
import * as widgets from "surveyjs-widgets";
import "inputmask/dist/inputmask/phone-codes/phone.js";
//And initialize widgets you are want ti use
widgets.icheck(SurveyVue);
widgets.select2(SurveyVue);
widgets.inputmask(SurveyVue);
widgets.jquerybarrating(SurveyVue);
widgets.jqueryuidatepicker(SurveyVue);
widgets.nouislider(SurveyVue);
widgets.select2tagbox(SurveyVue);
widgets.signaturepad(SurveyVue);
widgets.sortablejs(SurveyVue);
widgets.ckeditor(SurveyVue);
widgets.autocomplete(SurveyVue);
widgets.bootstrapslider(SurveyVue);

export default {
  name: 'app',
  components: {
    Survey,
    SurveyEditor
  },
  data () {
    //Define Survey JSON
    //Here is the simplest Survey with one text question
    var json = {
     elements: [
      { type: "text", name: "customerName", title: "What is your name?", isRequired: true}
     ]
    };
    
    //Create the model and pass it into VueSJ Survey component
    var model = new SurveyVue.Model(json)
    //You may set model properties
    // model.mode="display"

    return {
        survey: model
    }
  }
}
</script>
```
