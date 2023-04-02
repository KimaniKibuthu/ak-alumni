const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const config = require('./config/config');

const dbUri = process.env.ATLAS_URI;
const opts = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let mongoServer;

// Provide connection to a new in-memory database server.
const connect = async () => {
  // NOTE: before establishing a new connection close previous
  await mongoose.disconnect();

  let mongoUri = '';
  
  // Use in-memory database server when running tests for quick records retrieval
  if (process.env.NODE_ENV === 'test') {
    mongoServer = new MongoMemoryServer()

    mongoUri = await mongoServer.getUri();
  } else {
    mongoUri = config.mongoURI;
  }

  await mongoose.connect(mongoUri, opts).then(() => {
    console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});
};

// Remove and close the database and server.
const close = async () =>  {
  await mongoose.disconnect();

  if (process.env.NODE_ENV === 'test') {
    await mongoServer.stop();
  }
};

// Remove all data from collections
const clear = async () => {
    if (mongoose.connection.readyState !== 0) {
        const collections = mongoose.connection.collections;

        for (const key in collections) {
            await collections[key].deleteMany();
        }
    }
};

module.exports = {
  connect,
  close,
  clear,
};