import aws from 'aws-sdk';
import multerS3 from 'multer-s3';
import multer from 'multer';
import path from 'path';
import { v4 as uuid } from 'uuid';

const s3 = new aws.S3({
  apiVersion: '2006-03-01',
  accessKeyId: process.env.AWS_ACCESS_ID,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_REGION,
});

export const upload = multer({
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == 'image/png' ||
      file.mimetype == 'image/jpg' ||
      file.mimetype == 'image/jpeg' ||
      file.mimetype == 'image/pjpeg'
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Solo .png, .jpg y .jpeg son permitidos!'));
    }
  },
  storage: multerS3({
    s3,
    bucket: process.env.AWS_S3_BUCKET!,
    metadata: (req, file, cb) => {
      cb(null, { fileName: file.fieldname });
    },
    key: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      cb(null, `${uuid()}${ext}`);
    },
  }),
});
