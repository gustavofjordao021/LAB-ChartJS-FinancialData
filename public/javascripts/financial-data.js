axios.get("https://api.coindesk.com/v1/bpi/historical/close.json")
    .then(responseFromAPI => console.log(responseFromAPI))
    .catch(err => console.log("Error while getting the data: ", err));