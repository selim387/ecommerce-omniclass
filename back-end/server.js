const { URL, STORAGE  } = require('../config');

const db = require("./conn_to_db");

const fs = require('fs');
var Getter = require('./get_json_from_api');
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var methodOverride = require('method-override')
var cors = require('cors');
var write_file = true; 

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());

//requests
app.post('/omti', function(req, res){

	res.send({
            passed: true,
        });

});

app.get('/products/:code', function(req, res){
  
  try {

    const table_name = 'product';
    let select = '';

    omni_code = req.params.code;
    if(omni_code === '*')
    {
      select = `(select *  from ${table_name} where supplier_id in(
        select supplier_id from supplier where upper(country) like 'TUNISIA')) 
        union all (select * from ${table_name} where supplier_id in(
        select supplier_id from supplier where upper(country) not like 'TUNISIA'))`;
    }
    else{
    
      let code = '';

      check_lev_1_2 = omni_code.substr(-2);
      check_lev1 = omni_code.substr(6,2);
      //console.log(check_lev1);
  
      if( check_lev1  === '00' ){
        if( check_lev_1_2 === '00')
        {
           code = omni_code.substr(0,5) + "%";
        }else{
          return;
        }
      }
      else{
        if( check_lev_1_2 === '00'){
          code = omni_code.substr(0,8) + "%";
        }else{
          code = omni_code + "%";
        }
      }
      console.log(code);
      select = `select *  from ${table_name} where omniclass_code like '${code}' and supplier_id in(
        select supplier_id from supplier where upper(country) like 'TUNISIA') 
        union all 
        (select *  from ${table_name} where omniclass_code like '${code}' and supplier_id in(
        select supplier_id from supplier where upper(country) not like 'TUNISIA'))`;
  
    }

  db.DB.query(select, (err, result) => {
      console.log(result);
      
      res.json(result);
      if(err){
        console.log(err);
        res.json(err);
      }
  })

} catch (err) {
    console.error(err);
} 
});


app.get('/omti/:all', function(req, res){
  
  try {
    if(fs.existsSync(STORAGE)) {    
        console.log("The file exists.");

        res.json({"written" : 0});

    }else {
        
      console.log('The file does not exist.');
      
      Getter.xmlToJson(write_file, STORAGE, URL, function(err, data) {
          if (err) {
              return console.err(err);
        }
          res.json({"written" : 1});
      }); 

    }
} catch (err) {
    console.error(err);
}
});


app.listen(process.env.PORT || 8080);
