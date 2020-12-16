const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
 
// parse application/x-www-form-urlencoded y json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(require('./routes/usuario'));

app.get('/', function (req, res) {
  res.send('Hello World!');
}),
 
app.listen(3000);

mongoose.connect('mongodb://localhost:27017/empleados', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, (err, res) => {
    if (err) throw err;
    console.log('Base de datos ONLINE');
});