const multer = require('multer');

const aws = require('aws-sdk');
const multerS3 = require('multer-s3');
const multer = require('multer');

// Cấu hình S3
const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

// Cấu hình multer để lưu file lên S3
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'your-s3-bucket-name',
    acl: 'public-read',
    key: function (req, file, cb) {
      cb(null, Date.now().toString() + '-' + file.originalname); // Tạo tên file độc đáo
    }
  })
});

// const storage = multer.diskStorage({
//     // destination: (req, file, cb) => {
//     //   cb(null, './public/uploads');
//     // },
//     // filename: (req, file, cb) => {
//     //     console.log(file);
//     //   cb(null, Date.now() + file.originalname);
//     // },
//     destination: function (req, file, cb) {
//       cb(null, '/tmp'); // Sử dụng thư mục tạm /tmp
//     },
//     filename: function (req, file, cb) {
//       cb(null, Date.now() + '-' + file.originalname); // Lưu file với tên có timestamp
//     }
//   });
// // const upload = multer({ storage: _storege });
// const upload = multer({ storage: storage });

module.exports = upload;
