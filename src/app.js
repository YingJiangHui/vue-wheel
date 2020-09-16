import Vue from 'vue'
import Button from './button.vue'
import ButtonGroup from './button-group.vue'
import Input from './input.vue'
Vue.component('w-button', Button)
Vue.component('w-button-group', ButtonGroup)
Vue.component('w-input', Input)

new Vue({
    data(){
        return{
            loading1:false,
            loading2:false,
            loading3:true,
        }
    },
    methods:{
        fn(e){
            console.log(e)
        }
    }
}).$mount('#app')

