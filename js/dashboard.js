const chartCanvas = document.getElementById('dashboardChart').getContext('2d');

const myChart = new Chart(chartCanvas, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Income',
            data: [45000, 42000, 30000, 45000, 40000, 45000],
            backgroundColor: '#22C55E',
        }, {
            label: 'Expenses',
            data: [8120, 12400, 9300, 15000, 7100, 8120],
            backgroundColor: '#EF4444'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
            legend: {
                labels: {
                    color: '#3e75c1' // Matches your light theme --text color
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#3e75c1' // Colors the bottom month labels
                },
                grid: {
                    color: '#3e75c1' // Subtle grid lines
                }
            },
            y: {
                ticks: {
                    color: '#3e75c1' // Colors the side number labels
                },
                grid: {
                    color: '#3e75c1'
                }
            }
        }
    }
});