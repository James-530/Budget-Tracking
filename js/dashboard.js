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
        maintainAspectRatio: false
    }
});