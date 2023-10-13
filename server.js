
import morgan from "morgan";
import express from 'express';
import dotenv from 'dotenv';

import rutas from "./routes/routes.js";

dotenv.config();

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/api', rutas);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Servidor Express en ejecución en el puerto ${PORT}`);
});
