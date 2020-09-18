const expect = chai.expect;
import Vue from 'vue'
import TabsItem from '../src/tabs-item'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Button', () => {
    it('存在.', () => {
        expect(TabsItem).to.be.ok
    })
    it('接收 disabled ', () => {
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
            propsData:{
                disabled:true
            }
        }).$mount()
        expect(vm.$el.classList.contains('disabled')).to.be.true
        const callback = sinon.fake()
        vm.$on('click',callback)
        vm.$el.click()
        expect(callback).to.have.not.been.called
        vm.$destroy()
    })
    it('接受 name 属性', () => {
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
            propsData: {
                name: 'positionContent',
            }
        }).$mount()
        expect(vm.$el.getAttribute('data-name')).to.eq('positionContent')
    })
})