

import { connectToDatabase } from "../db/db.js";

export const registerProject = async (req, res) => {

    const params = req.body;

    if (params.id_user != null && params.name != "" && params.description != "") {
        //console.log(params);
        const db = await connectToDatabase();
        try {
            
            const newProject = {
                id_user : params.id_user,
                name : params.name,
                description : params.description,
                collaborators : [],
                tickets : []
            }

            const collection = db.collection('projects');
            const result = await collection.insertOne(newProject);

            const documento = await collection.findOne({ _id: result.insertedId });
            
            console.log(JSON.stringify(documento));
            res.json(documento);
            
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Error al agregar un usuario" });     
        }
    }
};
