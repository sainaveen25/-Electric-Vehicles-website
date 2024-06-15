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
            responsive: true
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

    // Filter form functionality
    const filterForm = document.getElementById('filter-form');

    filterForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const dateRange = document.getElementById('dateRange').value;
        const vehicleType = document.getElementById('vehicleType').value;

        // For demonstration, just log the filter values
        console.log(`Date Range: ${dateRange}, Vehicle Type: ${vehicleType}`);

        // You would typically fetch new data from a server here and update the charts
        // For example:
        // fetch(`your-api-endpoint?dateRange=${dateRange}&vehicleType=${vehicleType}`)
        //     .then(response => response.json())
        //     .then(data => {
        //         // Update chart data
        //         salesChart.data.datasets[0].data = data.sales;
        //         salesChart.update();

        //         marketShareChart.data.datasets[0].data = data.marketShare;
        //         marketShareChart.update();

        //         preferencesChart.data.datasets[0].data = data.preferences;
        //         preferencesChart.update();
        //     });
    });
});
