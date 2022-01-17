const { URL, STORAGE, USER, HOST, DATABASE, PASSWORD, PORT  } = require('../config');
const fs = require('fs');
var Getter = require('./get_json_from_api');
var write_file = true; 


const { Pool } = require("pg");

const pool = new Pool({

  user: USER,
  host: HOST,
  database: DATABASE,
  password: PASSWORD,
  port: PORT

});

const tableName = "omniclass";
const columnName = "title";

function getPromise()
{
	return new Promise((resolve, reject) => {
  try {

     if(fs.existsSync(STORAGE)) {
             
       console.log("The file exists.");
       var obj = JSON.parse(fs.readFileSync(STORAGE, 'utf8'));
       resolve(obj);
  
     }else {
        
       console.log('The file does not exist.');
      
       Getter.xmlToJson(write_file, STORAGE, URL, function(err, data) {
           if (err) {
              console.err(err);
              reject(err)
         }
         resolve(data); 
  
       }); 
    }
       } catch (err) {
     console.error(err);
     reject(err)
   }
  });
  }

  
  async function makeSynchronousRequest(request) {
    try {
      
      let promise = getPromise();
      let response_body = await promise;
      
      return response_body;
      // holds response from server that is passed when Promise is resolved
    }
    catch(error) {
      // Promise rejected
      console.log(error);
      return error;
    }
  }


async function execute(db) {

  const client = await pool
    .connect()

    .catch(err => {
      console.log("\nclient.connect():", err.name);

      //iterate over the error
      for (item in err) {
        if (err[item] != undefined) {
          process.stdout.write(item + " - " + err[item] + " ");
        }
      }

      // end the Pool instance
      console.log("\n");
      process.exit();
    });

  try {

        // Initiate the Postgres transaction
    await client.query("BEGIN");

/*     const truncate = `TRUNCATE TABLE ${tableName} CASCADE`;
    
    client.query(truncate, function(err, result) {
      console.log("client.query() SQL result:", result);

      if (err) {
        console.log("\nclient.query():", err);
        process.exit();
      } 
    });

    const notNull = `ALTER TABLE ${tableName} ALTER COLUMN ${columnName} DROP NOT NULL`;
    client.query(notNull, function(err, result) {
      console.log("client.query() SQL result:", result);

      if (err) {
        console.log("\nclient.query():", err);
        process.exit();
      } 
    }); */

    db.forEach(element => {

    try {
      // declare string for the SQL statement
      const sqlString = `INSERT INTO ${tableName} (omniclass_code, title) VALUES ($1, $2);`;
      var values = [
        element["number"],
        element["title"]
      ];

      // Pass SQL string to the query() method
      client.query(sqlString, values, function(err, result) {
        console.log("client.query() SQL result:", result);

        if (err) {
          console.log("\nclient.query():", err);

          // Rollback before executing another transaction
          client.query("ROLLBACK");
          console.log("Transaction ROLLBACK called");
        } 
/*         else {
          client.query("COMMIT");
          console.log("client.query() COMMIT row count:", result.rowCount);
        } */

      });

    } catch (er) {
      // Rollback before executing another transaction
      client.query("ROLLBACK");
      console.log("client.query():", er);
      console.log("Transaction ROLLBACK called");
    }

  });

  } finally {
    client.query("COMMIT");
    console.log("client.query() COMMIT row count:", result.rowCount);

    client.release();
    console.log("Client is released");
  }
}


  // anonymous async function to execute some code synchronously after http request
(async function () {
  let db = [];

      function access_tree(obj){
        
        let keys = Object.keys(obj); 
        let entity = {};
        let info = obj[keys[0]];
        entity['number'] = info.number; 
        entity['title'] = info.title;
        db.push(entity); 

        if( keys[2] !== undefined) 
        {
          let next = obj[keys[2]];
          next.forEach(level => access_tree(level));
        }
      }


	// wait to http request to finish
  let res = await makeSynchronousRequest();
  console.log( res);     
  
  let tree = res.omniclass.level1;
  console.log(tree);
  tree.forEach(element => access_tree(element));
       
	// below code will be executed after http request is finished
  execute(db);
})();

