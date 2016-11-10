const express  = require('express');
const morgan   = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port     = process.env.PORT || 8000;
const methodOverride = require('method-override');
const router   = require('./config/routes');

const app = express();
mongoose.connect('mongodb://localhost/W04D05');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride((req, res) => {
  if(req.body && typeof req.body === 'object' && '_method' in req.body) {
    let method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

app.use(morgan('dev'));
app.use(express.static(`${__dirname}/public`));
app.use('/', router);

app.listen(port, () => {console.log("working!!");
});
