import colors from 'colors';
colors.enable();
import dotenv from 'dotenv';
dotenv.config();
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
import passport from 'passport';
const app = express();
const PORT = process.env.PORT || 5000;

(async () => {
  require('./config/passportAuth');
  app.use(cors());
  app.use(bodyParser.json());
  app.use(morgan('dev'));
  app.use(helmet());
  app.use(compression());
  app.use(passport.initialize());

  app.use('/auth', authRoutes);
  app.use('/adoptions', petsRoutes);
  app.use('/admin', adminRoutes);

  app.use('*', (req, res, next) => {
    res.status(404).json({
      msg: 'Ruta no existe',
    });
  });

  await mongoConnection();
  app.listen(PORT, () => {
    console.log(`SERVER STARTED, PORT: ${PORT}`.cyan);
  });
})();
