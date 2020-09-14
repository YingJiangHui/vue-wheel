import Vue from 'vue'
import Button from './button.vue'
import Icon from './Icon.vue'
import ButtonGroup from './button-group.vue'

Vue.component('w-button', Button)
Vue.component('w-icon', Icon)
Vue.component('w-button-group', ButtonGroup)
new Vue({
    data() {
        return {
            loading1: false,
            loading2: false,
            loading3: false,
        }
    }
}).$mount('#app')

import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)

const {expect} = chai
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings'
        }
    })
    vm.$mount()
    const useEl = vm.$el.querySelector('use')
    const href = useEl.getAttribute('xlink:href')
    expect(href).to.eq('#i-settings')
    vm.$el.remove()
    vm.$destroy()
}
{
    const Constructor = Vue.extend(Button)
    const div = document.createElement('div')
    document.body.appendChild(div)
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
            iconPosition: 'right'
        }
    })
    vm.$mount(div)
    const svgEl = vm.$el.querySelector('svg')
    const order = window.getComputedStyle(svgEl).order
    expect(order).to.eq('2')
    vm.$el.remove()
    vm.$destroy()
}

{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
            loading: true
        }
    })
    vm.$mount()
    const useEl = vm.$el.querySelector('use')
    const href = useEl.getAttribute('xlink:href')
    expect(href).to.eq('#i-loading')
    vm.$el.remove()
    vm.$destroy()
}
{
    const Constructor = Vue.extend(Button)
    const div = document.createElement('div')
    document.body.appendChild(div)
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
        }
    })
    vm.$mount(div)
    const svgEl = vm.$el.querySelector('svg')
    const order = window.getComputedStyle(svgEl).order
    expect(order).to.eq('1')
    vm.$el.remove()
    vm.$destroy()
}
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
        }
    })
    vm.$mount()
    let spy = chai.spy(function(){})

    vm.$on('click', spy)
    // 希望这个函数被执行
    let button = vm.$el
    button.click()
    expect(spy).to.have.been.called()
}