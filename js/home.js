Vue.component('login', {
    template: '#login'
});
Vue.component('timeline', {
    template: '#timeline'
});
Vue.component('profile', {
    template: '#profile'
});

new Vue({
    el: '#apps',
    data: {
        newlibrary: '',
        newline: '',
        newkom: '',
        currenView: 'login',
        coments: [
            'angular.js', 'd3', 'node', 'jquery'
        ],
        comens: [
            'bandung', 'jakarta', 'surabaya'
        ],
        coms: [
            'greate!'
        ],
        gam: [
            'img/portfolios/card/2.jpg','img/portfolios/card/1.jpg','img/portfolios/card/1.jpg'
        ],

    },

    methods: {
        addLibrary: function() {
            this.coments.push(this.newlibrary);

            this.library = '';
        },
        addLine: function() {
            this.comens.push(this.newline);

            this.line = '';
        },
        addKom: function() {
            this.coms.push(this.newkom);

            this.kom = '';
        },
    }
});
