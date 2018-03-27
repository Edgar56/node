const express = require('express');
let app = express();

const port = process.env.PORT_|| 9999;


app.use('/css',express.static(__dirname + '/public'));

app.use((req,res,next)=>{

    console.log('MIDDLEWARE');

    next();

});

app.get('/', (req,res)=>{

    res.send(`
    
    <!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="/css/style.css">
    <title>Document</title>
</head>
<body>


<h1>HEloo</h1>
<p>asdasdjhasjkldhkasjdhaksjdhaksjdhn kjash doih wh dkjas hdkjlas hdashd alskjhd lkas</p>

</body>
</html>
    
    
    
    `);

});


app.listen(port);

console.log('It working');