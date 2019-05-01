var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();
var morgan     = require('morgan');

var port = process.env.PORT || 8080; 

app.use(morgan('dev')); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = express.Router();

router.get('/', function(req, res) {
	res.json({ message: 'Simple api test!' });	
});

router.route('/word')
	.post(function(req, res) {		
        var wordObj = req.body;
        res.set(
            { 'content-type': 'application/json' }
        ).send(wordObj);		
	})

app.use('/api', router);

var server = app.listen(port);
console.log('Simple api running on port:  ' + port);

module.exports = server