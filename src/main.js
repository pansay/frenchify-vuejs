/* global document */
import { Frenchify, rules, languageRules } from 'frenchify-rules';
import Vue from '../node_modules/vue/dist/vue';
import txt from '../i18n/en.json';

const el = '#app';
const frenchify = new Frenchify([rules]);
const text = 'abd -- def';

const options = languageRules
  .map(language => ({
    value: language.id,
    text: txt.languages[language.id],
  }))
  .concat([{
    value: 'nolang',
    text: txt.nolang,
  }]);

const data = {
  txt,
  message: text,
  options,
  language: 'nolang',
};

const created = () => {
  document.title = txt.title;
};

const methods = {
  something: function () {
    this.message = frenchify.applyRules(text);
  },
};

new Vue({
  el,
  data,
  created,
  methods,
});
