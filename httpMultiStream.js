var http = require("http");

var urls = [];

for(i = process.argv.length; i >= 2; i-- ){
  urls.push(process.argv[i]);
}

function getUrl(url, getUrl){
  var resString = "";
  http.get(url, function(response){
    response.on('data', function(data){
      resString += data.toString();
    });
    response.on('end', function(end){
      console.log(resString);
      getUrl(urls.pop(), getUrl);
    });
  });
};

getUrl(urls.pop(), getUrl)