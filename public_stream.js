console.log("Example is up now..")
var Twit = require('twit');
var config = require('./config')
var T = new Twit(config);

Getting the public feeds
var stream = T.stream('statuses/filter', { track: ['bananas', 'oranges', 'strawberries'] })
stream.on('tweet', function (tweet) {
  console.log(tweet.text)
})
