import colors from 'colors';
colors.enable();
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import { mongoConnection } from './config/mongoDB';
import { router as authRoutes } from './routes/auth';
import { router as petsRoutes } from './routes/pets';
import { router as adminRoutes } from './routes/admin';
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/auth', authRoutes);
app.use('/adoptions', petsRoutes);
app.use('/admin', adminRoutes);

mongoConnection();
app.listen(PORT, () => {
  console.log(`SERVER STARTED, PORT: ${PORT}`.cyan);
});
