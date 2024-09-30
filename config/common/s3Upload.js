// s3Upload.js
const multer = require('multer');
const { S3Client } = require('@aws-sdk/client-s3');
const { Upload } = require('@aws-sdk/lib-storage');

// Khởi tạo S3 client
const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }
});

// Cấu hình multer để lưu file vào bộ nhớ
const storage = multer.memoryStorage();

const upload = multer({ storage: storage });

const uploadToS3 = async (file) => {
  try {
    const upload = new Upload({
      client: s3,
      params: {
        Bucket: 'your-bucket-name',
        Key: `${Date.now()}-${file.originalname}`, // Tạo tên file duy nhất
        Body: file.buffer,
        ACL: 'public-read'
      }
    });

    const data = await upload.done(); // Thực hiện upload
    return data.Location; // Trả về URL của file đã upload
  } catch (error) {
    console.error('Lỗi khi upload lên S3:', error);
    throw error;
  }
};

// Export multer và uploadToS3
module.exports = { upload, uploadToS3 };
