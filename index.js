const {MongoClient} = require('mongodb');
const uri = 'mongosh "mongodb+srv://atlascluster.4vlh2le.mongodb.net/" --apiVersion 1 --username newdevmoz';
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        const db = client.db('test');
        const collection = db.collection('posts');
        const first = await collection.findOne();
        console.log(first)
    }
    finally {
    await client.close()
}
} run().catch(console.error)
