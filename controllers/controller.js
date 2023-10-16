
import { MongoClient } from 'mongodb';
import { connectToDatabase } from "../db/db.js";

export const register = async (req, res) => {

    const params = req.body;

    if (params.email != "" && params.name  != "" && params.password  != "" && params.type_user  != "" ) {
        //console.log(params);
        const db = await connectToDatabase();
        try {
            
            // console.log(params);
            const collection = db.collection('users');
            const result = await collection.insertOne(params);

            const documento = await collection.findOne({ _id: result.insertedId });
            
            console.log(JSON.stringify(documento));
            res.json(documento);
            
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Error al agregar un usuario" });     
        }
    }
};






/*

router.post('/items', async (req, res) => {
    try {
        const db =    await   connectToDatabase();
        const newItem = req.body;
        const result = await db.collection('items').insertOne(newItem);
        res.status(201).json(result.ops[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/items', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const items = await db.collection('items').find({}).toArray();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/items/:id', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const itemId = req.params.id;
        const item = await db.collection('items').findOne({ _id: new ObjectID(itemId) });
        if (!item) {
            res.status(404).json({ error: 'Item not found' });
            return;
        }
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/items/:id', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const itemId = req.params.id;
        const updatedItem = req.body;
        const result = await db.collection('items').findOneAndUpdate(
            { _id: new ObjectID(itemId) },
            { $set: updatedItem },
            { returnOriginal: false }
        );
        res.status(200).json(result.value);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/items/:id', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const itemId = req.params.id;
        const result = await db.collection('items').findOneAndDelete({ _id: new ObjectID(itemId) });
        res.status(200).json(result.value);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});*/
