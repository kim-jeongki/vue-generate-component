import Vue from 'vue'

Vue.filter('{{name | camelCase}}', (value) => {
    return value
})