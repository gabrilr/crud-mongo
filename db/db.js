
import { MongoClient } from 'mongodb';

const mongoURI = 'mongodb://127.0.0.1:27017'; // Reemplaza esto con tu URI de conexión a MongoDB
const dbName = 'tododb' // Reemplaza esto con el nombre de tu base de datos
const client = new MongoClient(mongoURI);

export async function connectToDatabase() {
    try {
        const connection = await client.connect();
        const db = connection.db(dbName);
        console.log('Conectado a MongoDB');
        return db;
    } catch (error) {
        console.error('Error de conexión a MongoDB:', error);
        throw error;
    }
}