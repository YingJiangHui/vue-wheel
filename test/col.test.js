const expect = chai.expect
import Vue from 'vue'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {
    it('存在.', () => {
        expect(Col).to.exist
    })

    it('接收 span', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                span:10
            }
        }).$mount(div)
        const el = vm.$el
        expect(el.classList.contains('col-10')).to.eq(true)
        vm.$destroy()
        vm.$el.remove()
    })
    it('接收 offset', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                offset:10
            }
        }).$mount(div)
        const el = vm.$el
        expect(el.classList.contains('offset-10')).to.eq(true)
        vm.$destroy()
        vm.$el.remove()
    })
    it('接收 iphone', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                iphone:{span:10,offset:10}
            }
        }).$mount(div)
        const el = vm.$el
        expect(el.classList.contains('col-iphone-10')).to.eq(true)
        expect(el.classList.contains('offset-iphone-10')).to.eq(true)
        vm.$destroy()
        vm.$el.remove()
    })
    it('接收 ipad', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                ipad:{span:10,offset:10}
            }
        }).$mount(div)
        const el = vm.$el
        expect(el.classList.contains('offset-ipad-10')).to.eq(true)

        expect(el.classList.contains('col-ipad-10')).to.eq(true)
        vm.$destroy()
        vm.$el.remove()
    })
    it('接收narrow pc', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                narrowPc:{span:10,offset:10}
            }
        }).$mount(div)
        const el = vm.$el
        expect(el.classList.contains('offset-narrow-pc-10')).to.eq(true)
        expect(el.classList.contains('col-narrow-pc-10')).to.eq(true)
        vm.$destroy()
        vm.$el.remove()
    })
    it('接收pc', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                pc:{span:10,offset:10}
            }
        }).$mount(div)
        const el = vm.$el
        expect(el.classList.contains('offset-pc-10')).to.eq(true)
        expect(el.classList.contains('col-pc-10')).to.eq(true)
        vm.$destroy()
        vm.$el.remove()
    })
    it('接收wide pc', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                widePc:{span:10,offset:10}
            }
        }).$mount(div)
        const el = vm.$el
        expect(el.classList.contains('offset-wide-pc-10')).to.eq(true)

        expect(el.classList.contains('col-wide-pc-10')).to.eq(true)
        vm.$destroy()
        vm.$el.remove()
    })
})