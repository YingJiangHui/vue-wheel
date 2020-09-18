const expect = chai.expect
import Vue from 'vue'
import Popover from '../src/popover'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
    it('存在', () => {
        expect(Popover).to.be.exist
    })
    it('接收 position.', (done) => {
        Vue.component('e-popover',Popover)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
         <e-popover position="left" ref="popover">
            <template slot="content">content</template>
            <button>按钮</button>
        </e-popover>
        `
        const vm = new Vue().$mount(div)

        vm.$el.querySelector('button').click()
        vm.$nextTick(() => {
            const {contentWrapper}  = vm.$refs.popover.$refs
            expect(contentWrapper.classList.contains('eagle-left')).to.be.true
            vm.$destroy()
            done()
        })
    })
    it('接收改触发的事件',()=>{})

})