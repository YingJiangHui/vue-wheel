const expect = chai.expect;
import Vue from 'vue'
import Collapse from '../src/collapse'
import CollapseItem from '../src/collapse-item'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Button', () => {
    it('存在', () => {
        expect(Collapse).to.be.exist
        expect(CollapseItem).to.be.exist
    })
    it('接收selected', () => {
    })

})