import Vue from 'vue'

Vue.filter('{{name | camelCaseOnly}}', (value) => {
    return (value || '').toUpperCase()
})