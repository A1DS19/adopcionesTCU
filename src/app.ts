import colors from 'colors';
colors.enable();
import dotenv from 'dotenv';
dotenv.config();
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import { mongoConnection } from './config/mongoDB';
import { router as authRoutes } from './routes/auth';
import { router as petsRoutes } from './routes/pets';
import { router as adminRoutes } from './routes/admin';
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.static(path.join(__dirname, '../client/build')));

app.use('/auth', authRoutes);
app.use('/adoptions', petsRoutes);
app.use('/admin', adminRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.use((req, res) => {
  res.status(404).json({
    message: 'Route Not Found',
  });
});

app.use((err: any, req: any, res: any) => {
  res.status(err.status || 500).json({
    message: err.message,
    error: {},
  });
});

mongoConnection();
app.listen(PORT, () => {
  console.log(`SERVER STARTED, PORT: ${PORT}`.cyan);
});
