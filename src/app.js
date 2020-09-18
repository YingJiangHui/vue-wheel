import Vue from 'vue'
import Button from './button.vue'
import ButtonGroup from './button-group.vue'
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'
import Header from './header'
import Footer from './footer'
import Content from './content'
import Layout from './layout'
import Sider from './sider'
import plugin from './plugin'
import Toast from './toast'
import TabsBody from './tabs-body'
import TabsHead from './tabs-head'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
import Tabs from './tabs'
import Popover from './popover'
Vue.component('w-button', Button)
Vue.component('w-button-group', ButtonGroup)
Vue.component('w-input', Input)
Vue.component('w-row', Row)
Vue.component('w-col', Col)
Vue.component('e-header', Header)
Vue.component('e-footer', Footer)
Vue.component('e-content', Content)
Vue.component('e-sider', Sider)
Vue.component('e-layout', Layout)
Vue.component('e-toast', Toast)
Vue.component('e-tabs-body', TabsBody)
Vue.component('e-tabs-head', TabsHead)
Vue.component('e-tabs-item', TabsItem)
Vue.component('e-tabs-pane', TabsPane)
Vue.component('e-tabs', Tabs)
Vue.component('e-popover', Popover)

Vue.use(plugin)
new Vue({
    data() {
        return {
            selectedTab:'sports'
        }
    },
    methods: {
    }
}).$mount('#app')

