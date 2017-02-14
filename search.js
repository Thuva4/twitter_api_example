console.log("Example is up now..")
var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);
var params = {
q: 'Google -RT',
geocode:'7.8731,80.7718,100mi',
lang: 'en',
count: 100
}

T.get('search/tweets', params,searchedData);

function searchedData(err, data, response) {
  for(var i = 0; i < data.statuses.length ;i++){
    console.log(data.statuses[i].text);
  }
}
