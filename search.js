console.log("Server is running ... ")

var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);

var params = {
q: 'Google -RT', // query exclude "RT"
// geocode:'7.8731,80.7718,100mi', // Geo location lat lon , radius
// lang: 'en',
count: 100 // number of tweets for the request
}

T.get('search/tweets', params,searchedData);

function searchedData(err, data, response) {
  for(var i = 0; i < data.statuses.length ;i++){
    console.log(data.statuses[i].text); // Getting tweets'text from the response
  }
}
