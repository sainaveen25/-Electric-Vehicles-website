document.addEventListener('DOMContentLoaded', function() {
    const salesCtx = document.getElementById('salesChart').getContext('2d');
    const marketShareCtx = document.getElementById('marketShareChart').getContext('2d');
    const preferencesCtx = document.getElementById('preferencesChart').getContext('2d');

    const salesChart = new Chart(salesCtx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'Monthly Sales',
                data: [120, 150, 180, 200, 170, 220, 240, 260, 230, 270, 300, 320],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const marketShareChart = new Chart(marketShareCtx, {
        type: 'pie',
        data: {
            labels: ['Tesla', 'Nissan', 'Chevrolet', 'BMW', 'Audi'],
            datasets: [{
                label: 'Market Share',
                data: [40, 20, 15, 10, 15],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    const preferencesChart = new Chart(preferencesCtx, {
        type: 'bar',
        data: {
            labels: ['Range', 'Price', 'Brand', 'Technology', 'Design'],
            datasets: [{
                label: 'Customer Preferences',
                data: [50, 60, 30, 40, 20],
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
