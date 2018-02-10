import Vue from 'vue'

Vue.directive('{{name | kebabCase}}', {
    bind() {

    },
    // When the bound element is inserted into the DOM...
    inserted(el, binding /*, vnode */) {
        el.innerHTML = binding.value
    },
    update() {

    },
    unbind() {

    }
})