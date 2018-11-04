import Vue from '../node_modules/vue/dist/vue';
import { Frenchify, rules, languageRules } from 'frenchify-rules';

const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
  },
});
