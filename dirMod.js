var fs = require('fs');
var path = require('path');
var files = [];
module.exports = function (dirname, ext, callback){

  fs.readdir(dirname, function(err, data){
    if(err)
      return callback(err, null);
  
    data.forEach(file => {
      if(path.extname(file) == '.' + ext)
      {
        files.push(file);
      }
    });
    return callback(null, files);
  });
}
