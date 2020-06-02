/*jshint esversion: 6 */
console.log('connected');

var app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: {
        drawer: true,
        colorMode: 'light',
        switch1: false,

        currentVisitors: "271",
        currentPercentage: "+0,7",
        visitorsIn: "68",
        inPercentage: "-1,7",
        visitorsOut: "288",
        outPercentage: "+1",

        // all data members for colored themes
        backColor: '#EFF3F9',
        textColor: '#4F4F4F',
        containerColor: "#FDFDFF",
        sideNavColor: '#FDFDFF', //'#282C31'
        bisonImg: 'images/bison_orange.svg', //'images/bison_yellow.svg
        currentVisitorsImg: 'images/current light mode.svg',
        currentPercentageImg: 'images/increase current.svg',
        inPercentageImg: 'images/decrease in.svg',
        outPercentageImg: 'images/increase out.svg',
        visitorsInImg: 'images/in light mode.svg',
        visitorsOutImg: 'images/out light mode.svg',
    },
    methods: {
        
    },
    computed: {
        colorTheme: function() {
            if(!this.switch1){ // light mode
                this.backColor = "#EFF3F9";
                this.textColor = "#4F4F4F";
                this.sideNavColor = '#FDFDFF';
                this.containerColor = "#FDFDFF";
                this.bisonImg = 'images/bison_orange.svg';
                this.currentVisitorsImg = 'images/current light mode.svg';
                this.visitorsInImg = 'images/in light mode.svg';
                this.visitorsOutImg = 'images/out light mode.svg';
            }
            if(this.switch1){ // dark mode
                this.backColor = "#212427";
                this.textColor = "#CACACA";
                this.sideNavColor = '#282C31';
                this.containerColor = "#282C31";
                this.bisonImg = 'images/bison_yellow.svg';
                this.currentVisitorsImg = 'images/current dark mode.svg';
                this.visitorsInImg = 'images/in dark mode.svg';
                this.visitorsOutImg = 'images/out dark mode.svg';
            }
        }
    },
    watch: {
        switch1(){ // when 'switch1 is toggled; call fucntions to change colors
            this.colorTheme();
        }
    }
});