const chart = $("#min-max");

Chart.defaults.global.animation.duration = 200;

const canvas = $("#min-max");

const data = {
    labels: ["Pennsylvania", "Arizona"],
    datasets: [
        {
            label: "Heart Transplant",
            data: [2794182, 382051],
        }
    ]
};

const addData = (procedure, state1, num1, state2, num2) => {
    barChart.data.labels = [state1, state2]
    barChart.data.datasets[0].label = [procedure]
    barChart.data.datasets[0].data = [num1, num2];
    barChart.update();
}


const barChart = Chart.Bar(canvas, {
    data: data,
});









//                        fill: false,
//                            lineTension: 0.1,
//                            backgroundColor: "rgba(75,192,192,0.4)",
//                            borderColor: "rgba(75,192,192,1)",
//                            borderCapStyle: 'butt',
//                            borderDash: [],
//                            borderDashOffset: 0.0,
//                            borderJoinStyle: 'miter',
//                            pointBorderColor: "rgba(75,192,192,1)",
//                            pointBackgroundColor: "#fff",
//                            pointBorderWidth: 1,
//                            pointHoverRadius: 5,
//                            pointHoverBackgroundColor: "rgba(75,192,192,1)",
//                            pointHoverBorderColor: "rgba(220,220,220,1)",
//                            pointHoverBorderWidth: 2,
//                            pointRadius: 5,
//                            pointHitRadius: 10,
