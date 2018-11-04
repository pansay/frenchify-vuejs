import Vue from 'vue';
import { Frenchify, rules, languageRules } from 'frenchify-rules';

const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
  },
});

console.log('hello', Vue, Frenchify, rules, languageRules, app);
