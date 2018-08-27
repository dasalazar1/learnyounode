var http = require("http");

var url = process.argv[2];

var resString = ""; 

http.get(url, function(response){
  response.on('data', function(data){
    resString += data.toString();
  });
  response.on('end', function(end){
    console.log(resString.length);
    console.log(resString);
  });
});