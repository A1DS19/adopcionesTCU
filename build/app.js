'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const colors_1 = __importDefault(require('colors'));
colors_1.default.enable();
const dotenv_1 = __importDefault(require('dotenv'));
dotenv_1.default.config();
const path_1 = __importDefault(require('path'));
const express_1 = __importDefault(require('express'));
const body_parser_1 = __importDefault(require('body-parser'));
const morgan_1 = __importDefault(require('morgan'));
const cors_1 = __importDefault(require('cors'));
const helmet_1 = __importDefault(require('helmet'));
const compression_1 = __importDefault(require('compression'));
const mongoDB_1 = require('./config/mongoDB');
const auth_1 = require('./routes/auth');
const pets_1 = require('./routes/pets');
const admin_1 = require('./routes/admin');
const app = express_1.default();
const PORT = process.env.PORT || 5000;
app.use(body_parser_1.default.json());
app.use(morgan_1.default('dev'));
app.use(cors_1.default());
app.use(helmet_1.default());
app.use(compression_1.default());
app.use(express_1.default.static(path_1.default.join(__dirname, './client/build')));
app.use('/auth', auth_1.router);
app.use('/adoptions', pets_1.router);
app.use('/admin', admin_1.router);
app.get('/', (req, res) => {
  res.sendFile(path_1.default.join(__dirname, './client/build/index.html'));
});
app.use('*', (req, res, next) => {
  res.status(404).json({
    msg: 'Ruta no existe',
  });
});
mongoDB_1.mongoConnection();
app.listen(PORT, () => {
  console.log(`SERVER STARTED, PORT: ${PORT}`.cyan);
});
