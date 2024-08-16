import { MongoClient } from "mongodb";

async function handler (req, res) {
    if(req.method === 'POST'){
        const data = req.body;
        
        const client = await MongoClient.connect('mongodb+srv://user123:testPass123@cluster0.ymw71.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0');
        const db = client.db();

        const meetupsCollection = db.collection('meetups');

        const result = await meetupsCollection.insertOne({data});
        
        console.log(result);
        
        client.close();

        res.status(201).json({message: 'Meetup inserted'})
    }
}

export default handler