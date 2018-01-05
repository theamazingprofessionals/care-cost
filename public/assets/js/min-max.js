let barChart;

function drawBarChart() {
  barChart = new Chart.Bar($('#min-max'), {
    data: {
      labels: ['Pennsylvania', 'Arizona'],
      datasets: [{
        backgroundColor: ['#4374e0', '#dee1e5'],
        data: [2794182, 382051],
      }],
    },
    options: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        position: 'top',
        padding: 10,
        text: ['Maximum and Minimum Cost Country Wide', 'Heart Transplant'],
      },
    },
  });
}

const addData = (procedure, state1, num1, state2, num2) => {
  barChart.data.labels = [state2, state1];
  barChart.data.datasets[0].data = [num2, num1];
  barChart.options.title.text[1] = procedure;
  barChart.update();
};