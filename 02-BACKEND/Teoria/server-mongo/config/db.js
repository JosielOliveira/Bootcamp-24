const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGO_URI;
const dbName = process.env.MONGO_DB;
const collectionName = process.env.MONGO_COLLECTION;

let db;

async function connectToDatabase() {
    if (db) return db;

    const client = new MongoClient(uri);
    await client.connect();
    db = client.db(dbName);
    console.log(`Conectado a la base de datos: ${dbName}`);
    return db;
}

async function getCollection() {
    const database = await connectToDatabase();
    return database.collection(collectionName);
}

module.exports = {
    connectToDatabase,
    getCollection
};