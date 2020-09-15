import Vue from 'vue'
import Button from './button.vue'
import Icon from './Icon.vue'
import ButtonGroup from './button-group.vue'

Vue.component('w-button', Button)
Vue.component('w-icon', Icon)
Vue.component('w-button-group', ButtonGroup)
new Vue({}).$mount('#app')

