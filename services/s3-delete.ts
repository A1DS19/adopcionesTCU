import aws from 'aws-sdk';
import multerS3 from 'multer-s3';
import multer from 'multer';
import path from 'path';
import { v4 as uuid } from 'uuid';
import { DeleteObjectRequest } from 'aws-sdk/clients/clouddirectory';

const s3 = new aws.S3({
  apiVersion: '2006-03-01',
  accessKeyId: process.env.AWS_ACCESS_ID,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_REGION,
});

export const s3delete = function (params: AWS.S3.DeleteObjectRequest) {
  return new Promise((resolve, reject) => {
    s3.createBucket(
      {
        Bucket: process.env.AWS_S3_BUCKET! /* Put your bucket name */,
      },
      function () {
        s3.deleteObject(params, function (err, data) {
          if (err) {
            reject(err);
            console.log(err);
          } else {
            console.log('Successfully deleted file from bucket');
            resolve(data);
          }
        });
      }
    );
  });
};
