const express = require("express");
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const clientId = '2171020067475894';
var privateKeyStr = 'MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDvulYxWd48VJSjQK0sl+WZatRUoBCDHKk7ywky42ClKnikt10mACpv40r4jfKZ8NOSUuK8vb+PNjPqMx77PVCb/JnwJeC/NrJpqNbhy4jNgBW+2TmidTI35a6sFky6Uhm27mtXh+0DJ+ldpqVCdk3bFf9VX12Sd0svk8cNVoVA/TDkZYTfnQ44RKSFrnfgJt1El+9WoZRK7uOMB6M2jwoIVj6YRk/jSduPZ2NFZAMRO+a+ZpcmgNNx4ee6RSeeK7zUXTrVUEWbsx80qmYayISYAL60ji+kYIGgrn/+f+EYtgpbkvjbUwyIEgSub0FHLhE6waoS0Yg96xk4GrN7VPqtAgMBAAECggEAWG/kdkZR/u2w+9zTRf0vXX6UoDeAf+3l3MIVPam2MJhPc2yVt3weK7KtKK6tDe9TDcr4DGrvrTRwyHhdeI/xGeqBG5/NnpzeCq6Xvyqn6C/VVderNGyJvydDXgbH/YBmLh8ciGkDncNuivb8Rl2AcU9XJ7aLvYm2ufGJYDlH5WYLemp3l9gnc1YQkkGP5uH67hNYbr3njeMjrR+Ebf+FvyoVVqNGDw846/dPNNdjXmQsihiAkH3SkCW4UkEqDgV4jwHswsQxJE74KxcXCzxQK0fKsGxEHEBhICq12B2XQCMe/CyElUiZHPaFBGEYMilZvkqHLmOzKS8F0KedwDo0PQKBgQD93AwWT0yNxc7rgJ3Zp6S9IgoVAWCI/qcLKffsxej0G+hqPydPa+I9EMfxPuQix2tEmjPBF5M/aUO7Pm6FJ6KAV4eGC7lXc4yGXgru7gpU+X/ZRZLlv00J0ZPPUntxNf2dO+I7ye76bf/h/pTYG+Cxx2/FPVOXcApwmdjAIg0chwKBgQDxv8lSPx+6RtcNzJLNjAWK1eEa/xzJJIuCyD/qpZeXs1DoIWswmTt3B2y+2AqIA4L88jhV0fR10yR+14p6cmPv6qTPhCvexC7PB7K+84dwVIrvPHwy7DfYquHqABYFUzhYdlz23MunkHHFj7yhMMq7ZRYCrxwQihZquIX3oNFQKwKBgQCXphIaabjDoH0hti2Vzk3dJi57qdzvOaC0TJfse7XTzbAjeCKVkU8PR60JcpZ6KELuMmfkW5787Hcnrf370VeD78Xnz60ijsZNpnRFkzHc3UcAlk1QrdzplqcD3LQdRzF/8jwNl24JcBjB+oEUMGMkEI22eBItjyLNbTpMXIsUlQKBgFge0bLCQb1z7xYfmO+F98s41Toy/fov8Q62Ed5liBGLEpXbAKiRYoSr1y7lr0kPBqNPY8ucoaCFW4tE5DxoEBe3D2Z5RkiIeIuMwdIrERaYKqC0Co3BX0YCXCEg8OX2BNbyJkbyCuZEl8Qs9dRH5c5TNae6zt8UhsFWC7dNDp9LAoGBALaBVhLBEUGWLsAXLDMn3Cq+7KYdGCwJMucWrN3WBbvy3C25DA2QpYO2LEIHptSFzVrofMKMCZ8yPbxYoC2Wr0DX1NGgkVZmAsRDIB6wcYbWR8mu6sXq3w1ThrmOeR8VrGyDI5J41CidctOQdLlc7dI0hxq7DFMQjaEwbxbyZZUI';
const partnerId = '217120000000451271872';
const hostname = 'api-sd.tngdigital.com.my';

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