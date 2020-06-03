/*jshint esversion: 6 */
console.log('connected');

var app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: {
        drawer: true,
        colorMode: 'light',
        switch1: false,
        date: new Date().toISOString().substr(0, 10),
        modal: false,
        dateRange: [],
        todaysDate: "",
        pickedDate: "",
        endDate: "",

        currentVisitors: "271",
        currentPercentage: "+0,7",
        visitorsIn: "68",
        inPercentage: "-1,7",
        visitorsOut: "288",
        outPercentage: "+1",
        weeklyReportDate: "July 8, 2020 - July 24, 2020",
        hourlyReportDate: "July 8, 2020",

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
        weeklyArrow: 'images/arrow down light.svg',
    },
    created: function(){
        this.loadSvg();
        this.getTodaysDate();
        this.weekDate();
    },
    methods: {
        getTodaysDate: function () {
            var date = new Date();
            var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

            var fulldate = months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
            this.todaysDate = fulldate;
            this.pickedDate = this.todaysDate;
            return this.pickedDate;
        },
        weekDate: function(){
            var date = new Date();
            date.setDate(date.getDate()+7);
            var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
            
            var fulldate = months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
            this.endDate = fulldate;
            return this.endDate;
        },
        loadSvg: function(){
            console.log("Svg loading");
            this.setStop("line", 22, 0.58);
        },
        setStop: function(id, radius, stop){
            var c = document.getElementById(id);
            c.className = "background";
            var stopVal = Math.PI * radius * 2 * (stop);
            c.setAttribute("stroke-dasharray", stopVal + ", 3000");
            c.setAttribute("stroke-dashoffset", stopVal);
            c.className = "overlayLine";
            console.log("finished set stop");
        },
    },
    computed: {
        dateRangeText () {
            return this.dateRange.join(' ~ ');
        },
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
                this.weeklyArrow = 'images/arrow down light.svg';
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
                this.weeklyArrow = 'images/arrow down dark.svg';
            }
        },
    },
    watch: {
        switch1(){ // when 'switch1 is toggled; call fucntions to change colors
            this.colorTheme();
        }
    }
});