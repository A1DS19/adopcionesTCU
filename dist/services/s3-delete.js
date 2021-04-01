"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.s3delete = void 0;
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const s3 = new aws_sdk_1.default.S3({
    apiVersion: '2006-03-01',
    accessKeyId: process.env.AWS_ACCESS_ID,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: process.env.AWS_REGION,
});
const s3delete = function (params) {
    return new Promise((resolve, reject) => {
        s3.createBucket({
            Bucket: process.env.AWS_S3_BUCKET /* Put your bucket name */,
        }, function () {
            s3.deleteObject(params, function (err, data) {
                if (err) {
                    reject(err);
                    console.log(err);
                }
                else {
                    console.log('Successfully deleted file from bucket');
                    resolve(data);
                }
            });
        });
    });
};
exports.s3delete = s3delete;
