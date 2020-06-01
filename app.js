console.log('connected');

var app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: {
        drawer: true,
        colorMode: 'light',
        switch1: false,


        // all data members for colored themes
        sideNavColor: '#FDFDFF', //'#282C31'
        bisonImg: 'images/bison_orange.svg' //'images/bison_yellow.svg
    },
    methods: {
        
    },
    computed: {
        colorTheme: function() {
            if(!this.switch1){ // light mode
                this.sideNavColor = '#FDFDFF'
                this.bisonImg = 'images/bison_orange.svg' 
            }
            if(this.switch1){ // dark mode
                this.sideNavColor = '#282C31'
                this.bisonImg = 'images/bison_yellow.svg'
            }
        }
    },
    watch: {
        switch1(){ // when 'switch1 is toggled; call fucntions to change colors
            this.colorTheme();
        }
    }
});