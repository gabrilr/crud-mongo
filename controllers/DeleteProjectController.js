import { ObjectId } from 'mongodb';
import { connectToDatabase } from "../db/db.js";

export const deleteProject = async (req, res) => {
    const projectId = req.params.id; // Suponemos que req.params.id es el ID del proyecto a eliminar.

    try {
        const db = await connectToDatabase();
        const collection = db.collection('projects');

        const userObjectId = new ObjectId(projectId);
        const result = await collection.deleteOne({ _id: userObjectId });
        //const result = await db.collection('users').deleteOne({ _id: userObjectId });

        if (result.deletedCount === 1) {
            res.json({ message: "Proyecto eliminado exitosamente." });
        } else {
            res.status(404).json({ message: "No se encontró el proyecto para eliminar." });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al eliminar el proyecto" });
    }
};
