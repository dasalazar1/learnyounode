var dirMod = require('./dirMod.js');

var dirPath = process.argv[2];
var ext = process.argv[3];

dirMod(dirPath, ext, function(err, data){
  if (err)
    console.log(err);

  data.forEach(file => {
    console.log(file);
  });
});