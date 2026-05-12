fetch("https://api.open-meteo.com/v1/forecast?latitude=28.6&longitude=77.2&current_weather=true")
  .then(res => res.json())
  .then(data => [data.current_weather])
  .then(data => data.filter(w => w.temperature > 20))
  .then(data => data.map(w => ({
     temp: "Prateek" + w.temperature,
     windspeed: w.windspeed
  })))

  .then(data => console.log(data))
  .catch(err => console.error("Error:", err));