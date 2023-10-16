import { ObjectId } from 'mongodb';
import { connectToDatabase } from "../db/db.js";

export const updateUser = async (req, res) => {

    const params = req.body;

    const idU = new ObjectId(req.params.id);
    //console.log('--> ' +idU);

    if (params.email != "" && params.name  != "" && params.password  != "" && params.type_user  != "" ) {
        
        try {

            const updatedUser = params; //Aquí haríamos las validaciones necesarias
            
            const filtro = { _id: idU };
            const actualizacion = { $set: updatedUser };

            const db = await connectToDatabase();

            const result = await db.collection('users').updateOne( filtro, actualizacion );

            console.log(JSON.stringify(result));

            if (result.modifiedCount === 1) {
                res.json({ message: "Usuario actualizado." });
            } else {
                
                res.status(500).json({ message: "Error al actualizar." });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Error al actualizar el usuario" });     
        }
    }
};