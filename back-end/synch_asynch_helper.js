var url = "http://bim-cloud.com/rest/omniclass/2/23/";
var xml = '';

const http = require('http');
var parseString = require('xml2js');
var parser = new ParseString({explicitArray:false, mergeAttrs : true});



// function returns a Promise
function getPromise() {
	return new Promise((resolve, reject) => {
		http.get(url, (response) => {

			response.on('data', (fragments) => {
                xml += fragments;
			});

			response.on('end', () => {
				let response_body = xml;
				resolve(response_body.toString());
			});

			response.on('error', (error) => {
				reject(error);
			});
		});
	});
}

// async function to make http request
async function makeSynchronousRequest(request) {
	try {
		let http_promise = getPromise();
		let response_body = await http_promise;
		console.log(response_body);
		etree = et.parse(response_body);
		

		// holds response from server that is passed when Promise is resolved
	}
	catch(error) {
		// Promise rejected
		console.log(error);
	}
}

// anonymous async function to execute some code synchronously after http request
(async function () {
	// wait to http request to finish
	await makeSynchronousRequest(); 
	// below code will be executed after http request is finished

})();

