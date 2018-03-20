const fs = require('fs');

fs.readdir('./',(err,content)=>{

    if(err) return err;

    console.log(content);
});
//mano pvz
// var readfile = fs.createReadStream('global.html');
// readfile.pipe(process.stdout);

fs.readFile('global.html', 'UTF-8', (err,content)=>{
    console.log(content)
});