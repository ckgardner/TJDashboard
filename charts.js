console.log('charts.js connected');

const CHART = document.getElementById('lineChart');
let lineChart = new Chart(CHART, {
    type: 'bar',
    data: {
        labels: ['Monday', 'Tuesday', 'Wedensday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
            label: 'Total visitors in ',
            data: [150, 190, 300, 150, 290, 200, 180],
            backgroundColor: [
                'rgb(243,143,61)',
                'rgb(243,143,61)',
                'rgb(243,143,61)',
                'rgb(243,143,61)',
                'rgb(243,143,61)',
                'rgb(243,143,61)',
                'rgb(243,143,61)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1
        }]
    }
})