const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/', require('./routes/root'))

app.get('/', (req, res) => res.send('Hello World!'));

app.all('*', (req, res) => { 
    res.status(404).send('404 - Not Found');
    if(req.accepts('html')){
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    } else if(req.accepts('json')) {
        res.json({message: '404 - Not Found'});
    } else{
        res.type('txt').send('404 - Not Found');
    }
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// Path: package.json

