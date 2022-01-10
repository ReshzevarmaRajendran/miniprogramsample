const express = require("express");
const path = require('path');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

  app.post('/api/pay', (req, res) => {
  	const requestUrlString = '/acl/api/v1/payments/pay';
	var minutes_ago = new Date( Date.now()); // pay no deduction of 2 min
  
	var current_timestamp = moment(minutes_ago).format("yyyy-MM-DDTHH:mm:ss+08:00");
	const refOrderId = "ORDER-" + Math.floor(Math.random() * 10000);
	var reqDataJson = "{\n    \"partnerId\": \"" + partnerId + 
	"\",\n    \"paymentRequestId\": \"" + refOrderId + 
	"\",\n    \"paymentOrderTitle\": \"Principal mini program payment\"" + 
	",\n    \"productCode\": \"51051000101000100001\"" + 
	",\n    \"mcc\": \"4399\"" + 
	",\n    \"paymentReturnUrl\": \"" + paymentReturnUrl + "\"" + 
	",\n    \"paymentNotifyUrl\": \"" + paymentNotifyUrl + "\"" + 
	",\n    \"paymentAmount\": {\n        \"currency\": \"MYR\"" + 
	",\n        \"value\": \"" + req.body.amt + "\"" + 
	"\n    },\n    \"paymentFactor\": {\n        \"isCashierPayment\": true" + 
	"\n    },\n    \"extraParams\": {\n        \"ORDER\": {\"referenceOrderId\":\"" + refOrderId + 
	"\",\"orderAmount\":{\"currency\":\"MYR\",\"value\":\"" + req.body.amt + "\"}}\n    },\n    \"envInfo\": {\n        \"osType\": \"IOS\",\n        \"terminalType\": \"MINI_APP\",\n        \"extendInfo\":\"{\\\"orderTerminalType\\\":\\\"MINI_APP\\\"}\"\n    }\n}";
		 
	var aclSignData = 'POST ' + requestUrlString + "\n" + clientId        + '.' + current_timestamp + '.' + reqDataJson        
	console.log('aclSignData: ' + aclSignData);

	// load signature script into execution context    
	var navigator = {}; 
	//fake a navigator object for the lib    
	var window = {}; 
	// parse data need to be signed    
	if(!privateKeyStr.startsWith("-----BEGIN PRIVATE KEY-----")) {        
		privateKeyStr = "-----BEGIN PRIVATE KEY-----\n"                      + privateKeyStr                      +"\n-----END PRIVATE KEY-----";    
	}    
	var rsaPrivateKey = KJUR.KEYUTIL.getKey(privateKeyStr);    
	// initialize    
	var sig = new KJUR.crypto.Signature({"alg": "SHA256withRSA"});
	// initialize for signature generation    
	sig.init(rsaPrivateKey);    
	sig.updateString(aclSignData);    
	// calculate signature    
	var sigValueHex = sig.sign();    
	var aclSignature = KJUR.hex2b64(sigValueHex);        
	var aclSignatureURLEncoded = encodeURIComponent(aclSignature);        

	var options = {
	  'method': 'POST',
	  'hostname': hostname,
	  'path': requestUrlString,
	  'headers': {
		'Content-Type': 'application/json; charset=UTF-8',
		'Client-Id': clientId,
		'Request-Time': current_timestamp,
		'Signature': 'algorithm=RSA256, keyVersion=2, signature=' + aclSignatureURLEncoded
	  },
	  'maxRedirects': 20
	};

	var result = '';
	var httpsreq = https.request(options, function (httpsres) {
	  var chunks = [];

	  httpsres.on("data", function (chunk) {
		chunks.push(chunk);
	  });

	  httpsres.on("end", function (chunk) {
		var body = Buffer.concat(chunks);
		console.log(body.toString());
		res.send({ express: body.toString()});
	  });

	  httpsres.on("error", function (error) {
		console.error(error);
	  });
	});

	var postData =  reqDataJson;
	httpsreq.write(postData);
	httpsreq.end();
});

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/public', 'index.html'));
  });
  

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});