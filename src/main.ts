import Vue from 'vue'
import Home from './pages/home.vue'
import About from './pages/about.vue'

// const notFound = () => import('./pages/404.vue');
declare var require : (filename,resolve)=>any;
Vue.config.productionTip = false
const notFound= Vue.component('notFound',(resolve) => require(['./pages/404.vue'], resolve));

var app = new Vue({
    el: '#app',
    data: {
        currentRoute: window.location.hash
    },
    computed: {
        ViewComponent() {
            switch (this.currentRoute) {
                case "#home":
                    return Home;
                case "#about":
                    return About;
            }
            return notFound;
        }
    },
    render(h) {
        return h(this.ViewComponent)
    }
});

window.addEventListener('popstate', () => {
    app.currentRoute = window.location.hash
})