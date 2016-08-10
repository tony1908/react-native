var rootUrl = "http://api.openweathermap.org/data/2.5/weather?APPID=eac25ace4729f9b33aca266522d0aaad";

module.exports = function(latitude, longitude){
  var url = `${rootUrl}&lat=${latitude}&lon=${longitude}`;
  //var url = 'http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=eac25ace4729f9b33aca266522d0aaad'

  return fetch(url).then(function(response){
      console.log("que pedox")
      return response.json() 
  }).then(function(json){
    console.log("mas que pedoxu")
    return {
      city: json.name,
      temperature: json.main.temp,
      description: json.weather[0].description    
    }
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  })
}






