import { ObjectId } from 'mongodb';
import { connectToDatabase } from "../db/db.js";

export const deleteUser = async (req, res) => {
    const userId = req.params.id; // Suponemos que req.params.id es el ID del usuario a eliminar.

    try {
        const db = await connectToDatabase();
        const collection = db.collection('users');

        const userObjectId = new ObjectId(userId);
        const result = await collection.deleteOne({ _id: userObjectId });
        //const result = await db.collection('users').deleteOne({ _id: userObjectId });

        if (result.deletedCount === 1) {
            res.json({ message: "Usuario eliminado exitosamente." });
        } else {
            res.status(404).json({ message: "No se encontró el usuario para eliminar." });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al eliminar el usuario" });
    }
};
