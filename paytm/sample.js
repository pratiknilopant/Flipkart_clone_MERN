/* More Details: https://developer.paytm.com/docs/checksum/#node */

var PaytmChecksum = require("./PaytmChecksum");

var paytmParams = {};

/* Generate Checksum via Array */

/* initialize an array */
paytmParams["MID"] = "DIY12386817555501617";
paytmParams["ORDERID"] = "ORDER_ID";

/**
* Generate checksum by parameters we have
* Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys 
*/
var paytmChecksum = PaytmChecksum.generateSignature(paytmParams, "YOUR_MERCHANT_KEY");
paytmChecksum.then(function(result){
	console.log("generateSignature Returns: " + result);
	var verifyChecksum =  PaytmChecksum.verifySignature(paytmParams, "YOUR_MERCHANT_KEY",result);
	console.log("verifySignature Returns: " + verifyChecksum);
}).catch(function(error){
	console.log(error);
});

/* Generate Checksum via String */

/* initialize JSON String */ 
body = "{\"mid\":\"YOUR_MID_HERE\",\"orderId\":\"YOUR_ORDER_ID_HERE\"}"

/**
* Generate checksum by parameters we have
* Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys 
*/
var paytmChecksum = PaytmChecksum.generateSignature(body, "YOUR_MERCHANT_KEY");
paytmChecksum.then(function(result){
	console.log("generateSignature Returns: " + result);
	var verifyChecksum =  PaytmChecksum.verifySignature(body, "YOUR_MERCHANT_KEY",result);
	console.log("verifySignature Returns: " + verifyChecksum);
}).catch(function(error){
	console.log(error);
});