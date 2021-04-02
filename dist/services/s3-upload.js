"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const multer_s3_1 = __importDefault(require("multer-s3"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const uuid_1 = require("uuid");
const s3 = new aws_sdk_1.default.S3({
    apiVersion: '2006-03-01',
    accessKeyId: process.env.AWS_ACCESS_ID,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: process.env.AWS_REGION,
});
exports.upload = multer_1.default({
    fileFilter: (req, file, cb) => {
        if (file.mimetype == 'image/png' ||
            file.mimetype == 'image/jpg' ||
            file.mimetype == 'image/jpeg' ||
            file.mimetype == 'image/pjpeg') {
            cb(null, true);
        }
        else {
            cb(null, false);
            return cb(new Error('Solo .png, .jpg y .jpeg son permitidos!'));
        }
    },
    storage: multer_s3_1.default({
        s3,
        bucket: process.env.AWS_S3_BUCKET,
        metadata: (req, file, cb) => {
            cb(null, { fileName: file.fieldname });
        },
        key: (req, file, cb) => {
            const ext = path_1.default.extname(file.originalname);
            cb(null, `${uuid_1.v4()}${ext}`);
        },
    }),
});
//# sourceMappingURL=s3-upload.js.map