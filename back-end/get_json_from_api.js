var parseString = require('xml2js').parseString;
var xml = '';
const fs = require('fs');
var http = require('http');

    
    const xmlToJson = (write_file = false, storage, url, callback) => {
        var req = http.get(url, function(res) {
      
          res.on('data', function(chunk) {
            xml += chunk;
          });
      
          res.on('error', function(e) {
            callback(e, null);
          });
      
          res.on('timeout', function(e) {
            callback(e, null);
          });
      
          res.on('end', function() {
            parseString(xml, function(err, result) {
              
            let data = JSON.stringify(result);
            
            if(write_file){
                fs.writeFile(storage, data, (err) => {
                    if (err) throw err;
                    console.log('Data written to file');
                });
            }

              callback(null, data);
            });
      
          });
        });
      }

exports.xmlToJson = xmlToJson;