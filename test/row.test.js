const expect = chai.expect
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
    it('存在.', () => {
        expect(Row).to.exist
    })

    it('接收 gutter 属性.', (done) => {
        Vue.component('e-row', Row)
        Vue.component('e-col', Col)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
      <e-row gutter="20">
        <e-col span="12"></e-col>
        <e-col span="12"></e-col>
      </e-row>
    `
        const vm = new Vue({
            el: div
        })
        setTimeout(() => {

            const row = vm.$el.querySelector('.eagle-row')
            expect(getComputedStyle(row).marginRight).to.eq('-10px')
            expect(getComputedStyle(row).marginLeft).to.eq('-10px')
            const cols = vm.$el.querySelectorAll('.eagle-col')
            expect(getComputedStyle(cols[0]).marginLeft).to.eq('10px')
            expect(getComputedStyle(cols[1]).marginLeft).to.eq('10px')
            done()
            vm.$el.remove()
            vm.$destroy()
        },0)
    })

    it('接收align属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Row)
        const vm = new Constructor({
            propsData: {
                align:'center'
            }
        }).$mount(div)
        const row = vm.$el
        expect(getComputedStyle(row).justifyContent).to.eq('center')
        vm.$el.remove()
        vm.$destroy()
    })
})