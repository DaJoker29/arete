import Vue from 'vue';
import App from './App.vue';

String.prototype.titleCase =
  String.prototype.titleCase ||
  function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  };

new Vue({
  el: '#app',
  render: h => h(App),
});
