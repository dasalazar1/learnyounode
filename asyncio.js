var fs = require('fs');

fs.readFile(process.argv[2], function(err, buf){
  if(err)
    console.log(err);
  console.log(buf.toString().split("\n").length - 1);
});