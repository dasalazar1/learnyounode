var http = require('http');
var urlParse = require('url');

var port = process.argv[2];

var server = http.createServer(function(req, res){

  if (req.method !== 'GET'){ return res.send('not a get'); }

  var url = urlParse.parse(req.url, true);
  var date = new Date(url.query.iso);
  var path = url.pathname;

  var returnTime = {};
  
  if (path.includes('unix'))
  {
    returnTime['unixtime'] = date.getTime();
  }
  else
  {
    returnTime['hour'] = date.getHours();
    returnTime['minute'] = date.getMinutes();
    returnTime['second'] = date.getSeconds();
  }

  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.write( JSON.stringify(returnTime) );
  res.end();

});

server.listen(port);