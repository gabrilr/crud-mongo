import { ObjectId } from "mongodb";
import { connectToDatabase } from "../db/db.js";

export const find = async (req, res) => {

    if (req.params.id == null) {
        
        res.status(400).json('Error. Al menos debe de contener una letra el Id');
        return;
    }
    
    console.log(JSON.stringify(req.params));

    if (ObjectId.isValid(req.params.id)) {

        console.log('El ObjectId es válido.');
        const idU = new ObjectId(req.params.id);
        // ObjctId se puede usar en la aplicación, porque ya se valido
        try {
            const filtro = { _id: idU };
            const db = await connectToDatabase();
    
            const result = await db.collection ('users').find(filtro).toArray();
    
            if (result == null) {
                
                res.status(404).json('Error. Usuario no encontrado');
            }
            //console.log(JSON.stringify(result));
            res.json(result);
    
        } catch (error) {
            console.log(error);
            res.status(500).json('Error. Algo salio mal.');
        }
    } else {
        res.status(404).json('Error. Id no válido.');
    }
};