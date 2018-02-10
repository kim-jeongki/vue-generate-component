import Vue from 'vue'
import {{name | camelCaseOnly}}Directive from './{{name | camelCaseOnly}}.directive.js'

// Here are some Jasmine 2.0 tests, though you can
// use any test runner / assertion library combo you prefer
describe('{{name | camelCaseOnly}}Directive', () => {
    // Inspect the directive instance on mount
    it('should correctly sets the message when created', () => {
      // const vm = new Vue({
      //   template: '<div v-{{name | kebabCase}}="a"></div>',
      //   data: { a: 'hello' }
      // }).$mount()
      // expect(vm.$el.innerHTML).toBe('hello')
    })
})