import { Router } from "express";

import { register } from "../controllers/RegisterUserController.js";
import { updateUser } from "../controllers/updateUserController.js";
import { find } from "../controllers/findUserController.js";
import { deleteUser } from "../controllers/DeleteUserController.js";

import { registerProject } from "../controllers/newProjectController.js";
import { deleteProject } from "../controllers/DeleteProjectController.js";


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
router.post('/registrar-usuario', register);
router.put('/actualizar-usuario/:id', updateUser);
router.post('/buscar-usuario/:id', find);
router.delete('/borrarUsuario/:id', deleteUser);

router.post('/registrar-proyecto', registerProject);
router.delete('/borrarProyecto/:id', deleteProject);


export default router;
