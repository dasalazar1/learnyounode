//console.log(process.argv);

var len = process.argv.length;
var total = 0;

for(i=2; i < len; i++ ){
    total += Number(process.argv[i]);
}

console.log(total);