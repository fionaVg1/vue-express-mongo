import Vue from 'vue'
import {expect} from 'chai'
import {mount} from '@vue/test-utils'
import Counter from '@/components/Counter'
describe('测试Counter.vue',()=>{
    it('点击按钮后，count的值会+1',()=>{
        const Constructor = Vue.extend(Counter);
        const vm = new Constructor().$mount();
        const button = vm.$el.querySelector('button');
        const clickE = new window.Event('click');
        button.dispatchEvent(clickE);
        vm._watcher.run();
        expect(Number(vm.$el.querySelector('span').textContent()).to.equal(1))
    })
})
describe('测试vue-test-util的用例',()=>{
    it('获取元素并断言值是否一致',()=>{
       const wrapper = mount(Counter);
       const h3= wrapper.find('h3');
       expect(h3.text().to.equal('count自增'))
    })
})