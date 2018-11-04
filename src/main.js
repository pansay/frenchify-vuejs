import { Frenchify, rules, languageRules } from 'frenchify-rules';
import Vue from '../node_modules/vue/dist/vue';
import txt from '../i18n/en.json';

const el = '#app';
const frenchify = new Frenchify([rules]);
const text = frenchify.applyRules('abd -- def');

const data = {
  txt,
  message: text,
};

const app = new Vue({
  el,
  data,
  created() {
    document.title = txt.title;
  },
});

console.log(app, languageRules);
