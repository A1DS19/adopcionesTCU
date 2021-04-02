"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuth = void 0;
const jwt = require('jsonwebtoken');
const isAuth = (req, res, next) => {
    //si el Authorization header existe lo va a dejar pasar
    const authorizationHeader = req.get('Authorization');
    if (!authorizationHeader) {
        return res.status(401).json({ msg: 'Header de autenticación invalido' });
    }
    //recibe token por medio de header
    //lo separa en el espacio entre 'Bearer ' y 'token'
    // const token = authorizationHeader.split(' ')[1];
    const token = authorizationHeader;
    let decodedToken;
    try {
        decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    }
    catch (err) {
        res.status(500).json({ msg: err.message });
    }
    if (!decodedToken) {
        res.status(401).json({ msg: 'No esta autenticado' });
    }
    //guarda usuario global
    //req.userId = decodedToken.userId;
    next();
};
exports.isAuth = isAuth;
//# sourceMappingURL=isAuth.js.map