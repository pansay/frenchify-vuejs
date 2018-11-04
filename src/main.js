import { Frenchify, rules, languageRules } from 'frenchify-rules';
import Vue from '../node_modules/vue/dist/vue';
import txt from '../i18n/en.json';

const el = '#app';
const frenchify = new Frenchify([rules]);
const text = frenchify.applyRules('abd -- def');

const options = languageRules
  .map(language => {
    return {
      value: language.id,
      text: txt.languages[language.id],
    };
  })
  .concat([{
    value: 'nolang',
    text: txt.nolang,
  }]);

const data = {
  txt,
  message: text,
  options,
};

const app = new Vue({
  el,
  data,
  created() {
    document.title = txt.title;
  },
});

console.log(app, languageRules);
