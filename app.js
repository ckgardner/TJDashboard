console.log('connected');

var app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: {
        drawer: true,
        colorMode: 'light',
        switch1: false,


        // all data members for colored themes
        sideNavColor: '#FDFDFF' //'#282C31'
    },
    methods: {
        
    },
    computed: {
        colorTheme: function() {
            if(!this.switch1){ // light mode
                this.sideNavColor = '#FDFDFF' 
            }
            if(this.switch1){ // dark mode
                this.sideNavColor = '#282C31'
            }
        }
    },
    watch: {
        switch1(){ // when 'switch1 is toggled; call fucntions to change colors
            this.colorTheme();
        }
    }
})