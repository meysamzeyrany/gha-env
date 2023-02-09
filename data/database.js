import { MongoClient, ServerApiVersion } from 'mongodb';

const clusterAddress = process.env.MONGODB_CLUSTER_ADDRESS;
const dbUser = process.env.MONGODB_USERNAME;
const dbPassword = process.env.MONGODB_PASSWORD;
const dbName = process.env.MONGODB_DB_NAME;

console.log({dbUser,dbPassword})

const uri = `mongodb+srv:///${dbUser}:${dbPassword}@${clusterAddress}/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

client.connect((err) => {
  // const collection = client.db(dbName).collection('devices');
  // perform actions on the collection object
  // client.close();
});

// const uri = `mongodb+srv://${dbUser}:${dbPassword}@${clusterAddress}/?retryWrites=true&w=majority`;
// const client = new MongoClient(uri);

console.log('Trying to connect to db');

// try {
//   await client.connect();
//   await client.db(dbName).command({ ping: 1 });
//   console.log('Connected successfully to server');
// } catch (error) {
//   console.log('Connection failed.');
//   await client.close();
//   console.log('Connection closed.');
// }

const database = client.db(dbName);

export default database;
