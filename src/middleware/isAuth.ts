const jwt = require('jsonwebtoken');
import { Request, Response, NextFunction } from 'express';

export const isAuth = (req: Request, res: Response, next: NextFunction) => {
  //si el Authorization header existe lo va a dejar pasar
  const authorizationHeader = req.get('Authorization');
  if (!authorizationHeader) {
    return res.status(401).json({ msg: 'Header de autenticación invalido' });
  }

  //recibe token por medio de header
  //lo separa en el espacio entre 'Bearer ' y 'token'
  // const token = authorizationHeader.split(' ')[1];

  const token = authorizationHeader.split(' ')[1];
  let decodedToken;

  try {
    decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
  } catch (err: any) {
    res.status(500).json({ msg: err.message });
  }

  if (!decodedToken) {
    res.status(401).json({ msg: 'No esta autenticado' });
  }

  //guarda usuario global
  //req.userId = decodedToken.userId;
  next();
};
