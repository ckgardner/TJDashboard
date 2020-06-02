console.log('charts.js connected');

const WEEKLY_REPORT_CHART = document.getElementById('weeklyReportChart');
Chart.defaults.global.animation.duration = 2400;
let WeeklyChart = new Chart(WEEKLY_REPORT_CHART, {
    type: 'bar',
    data: {
        labels: ['Monday', 'Tuesday', 'Wedensday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
            label: 'Total visitors in ',
            data: [650, 400, 250, 350, 500, 750, 900],
            backgroundColor: [
                'rgb(243,143,61)',
                'rgb(243,143,61)',
                'rgb(243,143,61)',
                'rgb(243,143,61)',
                'rgb(243,143,61)',
                'rgb(243,143,61)',
                'rgb(243,143,61)',
            ]
        }]
    }
});

const HOURLY_REPORT_CHART = document.getElementById('hourlyReportChart');
let HourlyChart = new Chart(HOURLY_REPORT_CHART, {
    type: 'bar',
    data: {
        labels: ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'],
        datasets:[
            {
                data: [7, 12, 16, 29, 34, 39, 48, 90, 130, 150, 110, 80, 40, 60],
                backgroundColor: [
                    'rgb(253, 183, 19)',
                    'rgb(253, 183, 19)',
                    'rgb(253, 183, 19)',
                    'rgb(253, 183, 19)',
                    'rgb(253, 183, 19)',
                    'rgb(253, 183, 19)',
                    'rgb(253, 183, 19)',
                    'rgb(253, 183, 19)',
                    'rgb(253, 183, 19)',
                    'rgb(253, 183, 19)',
                    'rgb(253, 183, 19)',
                    'rgb(253, 183, 19)',
                    'rgb(253, 183, 19)',
                    'rgb(253, 183, 19)'
                ]
            },
            {
                data: [11, 16, 19, 19, 38, 29, 59, 99, 110, 140, 130, 70, 50, 20],
                backgroundColor: [
                    'rgb(238, 122, 83)',
                    'rgb(238, 122, 83)',
                    'rgb(238, 122, 83)',
                    'rgb(238, 122, 83)',
                    'rgb(238, 122, 83)',
                    'rgb(238, 122, 83)',
                    'rgb(238, 122, 83)',
                    'rgb(238, 122, 83)',
                    'rgb(238, 122, 83)',
                    'rgb(238, 122, 83)',
                    'rgb(238, 122, 83)',
                    'rgb(238, 122, 83)',
                    'rgb(238, 122, 83)',
                    'rgb(238, 122, 83)'
                ]
            },
            {
                data: [6, 20, 24, 27, 32, 36, 69, 104, 120, 136, 157, 110, 80, 40],
                backgroundColor: [
                    'rgb(238, 83, 83)',
                    'rgb(238, 83, 83)',
                    'rgb(238, 83, 83)',
                    'rgb(238, 83, 83)',
                    'rgb(238, 83, 83)',
                    'rgb(238, 83, 83)',
                    'rgb(238, 83, 83)',
                    'rgb(238, 83, 83)',
                    'rgb(238, 83, 83)',
                    'rgb(238, 83, 83)',
                    'rgb(238, 83, 83)',
                    'rgb(238, 83, 83)',
                    'rgb(238, 83, 83)',
                    'rgb(238, 83, 83)'
                ]
            }
        ]


        // datasets: [{
        //     label: 'Total visitors in ',
        //     data: [[12,19, 7], 54, 143, 111, 90, 74, 189, 37, 94, 158, 10, 32, 67, 123],
        //     backgroundColor: [
        //         'rgb(243,143,61)',
        //         'rgb(243,143,61)',
        //         'rgb(243,143,61)',
        //         'rgb(243,143,61)',
        //         'rgb(243,143,61)',
        //         'rgb(243,143,61)',
        //         'rgb(243,143,61)',
        //         'rgb(243,143,61)',
        //         'rgb(243,143,61)',
        //         'rgb(243,143,61)',
        //         'rgb(243,143,61)',
        //         'rgb(243,143,61)',
        //         'rgb(243,143,61)',
        //         'rgb(243,143,61)'
        //     ]
        // }]
    }
})