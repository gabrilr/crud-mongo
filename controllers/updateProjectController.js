import { ObjectId } from "mongodb";
import { connectToDatabase } from "../db/db.js";

export const updateProject = async (req, res) => {

    const params = req.body;

    if (req.params.id == null) {

        res.status(400).json('Error. Al menos debe de contener una letra el Id');
        return;
    }

    console.log(JSON.stringify(req.params));

    if (ObjectId.isValid(req.params.id)) {

        const idU = new ObjectId(req.params.id);

        try {
            const updatedProject = params; //Aquí haríamos las validaciones necesarias

            const filtro = { _id: idU };
            const actualizacion = { $set: updatedProject };

            const db = await connectToDatabase();

            const result = await db.collection('projects').updateOne(filtro, actualizacion);

            console.log(JSON.stringify(result));

            if (result.modifiedCount === 1) {
                res.json({ message: "Proyecto actualizado." });
            } else {

                res.status(500).json({ message: "Error al actualizar." });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Error al actualizar el proeycto" });
        }

    } else {
        res.status(404).json('Error. Id no válido.');
    }
}
