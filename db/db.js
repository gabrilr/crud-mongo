
import { MongoClient } from 'mongodb';

const mongoURI = 'mongodb://localhost:27017'; // Reemplaza esto con tu URI de conexión a MongoDB
const dbName = process.env.DATABASE; // Reemplaza esto con el nombre de tu base de datos

async function connectToDatabase() {
    const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();
        const db = client.db(dbName);
        console.log('Conectado a MongoDB');
        return db;
    } catch (error) {
        console.error('Error de conexión a MongoDB:', error);
        throw error;
    }
}

export { connectToDatabase };