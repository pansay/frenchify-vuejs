import Vue from '../node_modules/vue/dist/vue';
import { Frenchify, rules, languageRules } from 'frenchify-rules';

const frenchify = new Frenchify([rules]);

const text = frenchify.applyRules('abd -- def');

const app = new Vue({
  el: '#app',
  data: {
    message: text,
  },
});
