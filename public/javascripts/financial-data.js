// Axios config
axios.get("https://api.coindesk.com/v1/bpi/historical/close.json")
    .then(responseFromAPI => printChart(responseFromAPI.data.bpi))
    .catch(err => console.log("Error while getting the data: ", err));

const ctx = document.getElementById('myChart').getContext('2d');

// Input filtering
let dateStart = ""; 
let dateEnd = "";
let currencyInput = "";

document.getElementById("submit").onclick = function() {
    dateStart = document.getElementById("dateInput1").value; 
    dateEnd = document.getElementById("dateInput2").value;
    currencyInput = document.getElementById("currency").value;
    callFilterData(dateStart, dateEnd, currencyInput);
};

function callFilterData(dateStart, dateEnd, currency) {
    axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${dateStart}&end=${dateEnd}&currency=${currency}`)
    .then(responseFromAPI => printChart(responseFromAPI.data.bpi, currency))
    .catch(err => console.log("Error while getting the data: ", err));
}
    
// Print Chart function
const printChart = (data, currency) => {
    const financialChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: Object.keys(data),
            datasets: [{
                label: `Bitcoin price in ${currency || "USD"}`,
                data: Object.values(data),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        }
    });
}