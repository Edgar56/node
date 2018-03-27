const express = require('express');
let app = express();

const port = process.env.PORT_|| 9999;

app.get('/',(req,res)=>{

    res.send('<h1> Hello </h1>')

});

app.get('/api',(req,res)=>{

  //  res.send('<h1> API </h1>');

    res.json({name: 'Edgar'});

});




app.listen(port);

console.log('It working');