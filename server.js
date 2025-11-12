import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import userRoutes from './routes/user.route.js';

import { notFound } from './middleware/notFound.js';
import { errorHandler } from './middleware/errorHandler.js';
const PORT = process.env.PORT || 3000;

dotenv.config();
const app = express();

app.use(express.json());
app.use(morgan("dev"));


app.use("/api/users",userRoutes);

app.use(notFound);


app.use(errorHandler);

app.listen(PORT ,()=> { console.log(`Server running on port ${PORT}`)});

