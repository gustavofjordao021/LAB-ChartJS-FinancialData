axios
    .get("https://api.coindesk.com/v1/bpi/historical/close.json")
    .then(responseFromAPI => {
        console.log(responseFromAPI);
        printChart(responseFromAPI.data);
    })
    .catch(err => console.log("Error while getting the data: ", err));

let printChart = bpiData => {
    const chartData = bpiData["Time series - 30 rolling days"];
    // const bpiDates = Object.keys(chartData);
    // const bpiPrice = stockDates.map(date => chartData[date]["4. close"])
    const ctx = window.document.getElementById("myChart").getContext("2d");
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: bpiDates,
            datasets: [{
            label: "Bitcoin Price Index chart",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: bpiPrice
            }]
        }
    });
}