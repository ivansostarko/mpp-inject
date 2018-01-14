// http://0.0.0.0:8001/?domain=test.com&protocol=https&url=http://google.hr&path=past&name=username&value=test&type=text
var app = require('express')();
var bodyParser = require('body-parser');
var Oriento = require('oriento');
var cors = require('cors');
var base64 = require('base-64');

var port = 3000;


var server = Oriento({
  host: '10.1.0.3',
  port: 2424,
  username: 'root',
  password: 'root'
});


// parse application/json
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({
	extended: true
}));


var db = server.use({
  name: 'mpp_inject',
  username: 'root',
  password: 'root'
});
console.log('Using database: ' + db.name);


app.get('/', function (req, res) {

	// Decode
	var req_payload = base64.decode(req.param('payload'));

	//console.log(req_payload);


     var objectValue = JSON.parse(req_payload);
       console.log(objectValue['prmrs_domain']);



	// Get API Values and Decrypt IT
	var req_domain = objectValue['prmrs_domain'];
	var req_protocol = objectValue['prmrs_protocol'];
	var req_url = objectValue['prmrs_url'];
	var req_path = objectValue['prmrs_path'];
	var req_name = objectValue['prmrs_name'];
	var req_value = objectValue['prmrs_value'];
	var req_type = objectValue['prmrs_type'];



	console.log("New request");
	console.log("Domain: " + req_domain);


	db.insert().into('mpp_inject_shema').set({domain: req_domain, protocol: req_protocol, url: req_url, path: req_path, name: req_name, value: req_value, type: req_type}).one()
	.then(function (user) {
  	console.log('created', user);
	});


	// Always return status code 200
	res.sendStatus(200);

});

app.listen(port, function() {
	console.log('Starting mpp-inject server on port ' + port);
});