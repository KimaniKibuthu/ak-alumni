// const { MongoClient } = require("mongodb");
// const Db = process.env.ATLAS_URI;
// const client = new MongoClient(Db, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
 
// var _db;
 
// module.exports = {
//   connectToServer: function (callback) {
//     client.connect(function (err, db) {
//       // Verify we got a good "db" object
//       console.log("Do we have DB???")
//       if (db)
//       {
//         _db = db.db("employees");
//         console.log("Successfully connected to MongoDB."); 
//       }
//       return callback(err);
//          });
//   },
 
//   getDb: function () {
//     return _db;
//   },
// };



const { MongoClient } = require("mongodb");
const db_url = process.env.ATLAS_URI;
 
// Replace the following with your Atlas connection string                                                                                                                                        
// const url = "mongodb+srv://<username>:<password>@clustername.mongodb.net/test?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";
const client = new MongoClient(db_url);
 
 // The database to use
 const dbName = "test";
                      
 const connectToServer = async function run() {
    try {
         await client.connect();
         console.log("Connected correctly to server");
         const db = client.db(dbName);

         // Use the collection "people"
         const col = db.collection("people");

         // Construct a document                                                                                                                                                              
         let personDocument = {
             "name": { "first": "Alan", "last": "Turing" },
             "birth": new Date(1912, 5, 23), // May 23, 1912                                                                                                                                 
             "death": new Date(1954, 5, 7),  // May 7, 1954                                                                                                                                  
             "contribs": [ "Turing machine", "Turing test", "Turingery" ],
             "views": 1250000
         }

         // Insert a single document, wait for promise so we can read it back
         const p = await col.insertOne(personDocument);
         // Find one document
         const myDoc = await col.findOne();
         // Print to the console
         console.log(myDoc);

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}

module.exports = {
  connectToServer,
  // close,
  // clear,
};

// await connectToServer().catch(console.dir);
