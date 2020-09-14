import Vue from 'vue'
import Button from './button.vue'
import Icon from './Icon.vue'
Vue.component('w-button', Button)
Vue.component('w-icon', Icon)
new Vue({
    data(){
        return{
            loading1:false,
            loading2:false,
            loading3:false,
        }
    }
}).$mount('#app')