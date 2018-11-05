/* global document */
import { Frenchify, rules, languageRules } from 'frenchify-rules';
import showdown from 'showdown';
import Vue from '../node_modules/vue/dist/vue';
import txt from '../i18n/en.json';

const el = '#app';
const showDownConverter = new showdown.Converter();

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
  input: '',
  output: '',
  helpers: false,
  markdown: false,
  options,
  language: 'nolang',
};

const convert = (languageId, markdown, helpers, text) => {
  const rulesToApply = [];
  if (languageId !== 'nolang') {
    rulesToApply
      .push(languageRules
        .find(language => language.id === languageId).rules);
  }
  if (helpers) {
    rulesToApply.push(rules);
  }
  const frenchify = new Frenchify(rulesToApply);
  text = frenchify.applyRules(text);
  if (markdown) {
    text = showDownConverter.makeHtml(text);
  }
  return text;
};

const created = () => {
  document.title = txt.title;
};

const methods = {
  convert() {
    this.output = convert(this.language, this.markdown, this.helpers, this.input);
  },
};

// eslint-disable-next-line no-new
new Vue({
  el,
  data,
  created,
  methods,
});
