const expect = chai.expect
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
    it('存在.', () => {
        expect(Toast).to.exist
    })

    it('接收autoCloseDelay', (done) => {
        const Constructor = Vue.extend(Toast)
        const div = document.createElement('div')
        document.body.appendChild(div)
        const vm = new Constructor({
            propsData: {
                autoCloseDelay: 1
            }
        }).$mount(div)
        setTimeout(() => {
            expect(document.body.contains(vm.$el)).to.eq(false)
            done()
        }, 1500)
    })
    it('接收position', () => {
        const Constructor = Vue.extend(Toast)
        const vm = new Constructor({
            propsData: {
                position: 'left'
            }
        }).$mount()
        expect(vm.$el.classList.contains('toast-left')).to.eq(true)
        vm.$destroy()
    })
    it('接收closeButton', () => {
        const Constructor = Vue.extend(Toast)
        const callback = sinon.fake()
        const vm = new Constructor({
            propsData: {
                closeButton: {
                    text: '知道了',
                    callback
                }
            }
        }).$mount()
        const span = vm.$el.querySelector('.close')
        expect(span.textContent.trim()).to.eq('知道了')
        span.click()
        expect(callback).to.have.been.called
    })
    it('接收enableHtml', () => {
        const Constructor = Vue.extend(Toast)
        const vm = new Constructor({
            propsData: {
                enableHtml: true
            }
        })
        vm.$slots.default = [`<strong id="test">123</strong>`]
        vm.$mount()
        expect(vm.$el.querySelector('#test')).to.exist

    })
})