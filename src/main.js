import Vue from 'vue';
import App from './App.vue'

import jQuery from 'jquery';
import Foundation from 'foundation-sites';

window.$ = jQuery;
window.jQuery = jQuery;

Foundation.addToJquery(jQuery);

Vue.use(Foundation);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

window.$(document).foundation();