import { ObjectId } from "mongodb";
import { connectToDatabase } from "../db/db.js";

export const find = async (req, res) => {

    const params = req.body;
    const idU = new ObjectId(req.params.id);

    if(params.email != "" && params.name  != "" && params.password  != "" && params.type_user  != ""){
        try {
            const filtro = { _id: idU };
            const db = await connectToDatabase();

            const result = await db.collection ('users').find(filtro).toArray();

            console.log(JSON.stringify(result));
            res.json(result);

        } catch (error) {
            console.log(error);
        }
    }
};
