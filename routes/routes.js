
import { Router } from "express";
import { register } from "../controllers/controller.js";
import { updateUser } from "../controllers/updateUserController.js";


const router = Router();

router.post('/', (req, res) => {
    try {

        const items = req.body;
        console.log(items);
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})
router.post('/registrar', register);

router.put('/actualizar/:id', updateUser); //Esto es la ruta que yo agregué

export default router;
