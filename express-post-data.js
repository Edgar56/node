const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extend:false}));



const port = process.env.PORT_|| 9999;


app.use('/assets',express.static(__dirname + '/public'));

app.use((req,res,next)=>{

    console.log('MIDDLEWARE');

    next();

});

app.post('/post',(req,res)=>{

    console.log(req.body);

});


app.listen(port);

console.log('Its working');