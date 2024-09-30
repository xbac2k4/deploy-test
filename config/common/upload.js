const multer = require('multer');

const storage = multer.diskStorage({
    // destination: (req, file, cb) => {
    //   cb(null, './public/uploads');
    // },
    // filename: (req, file, cb) => {
    //     console.log(file);
    //   cb(null, Date.now() + file.originalname);
    // },
    destination: function (req, file, cb) {
      cb(null, '/tmp'); // Sử dụng thư mục tạm /tmp
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname); // Lưu file với tên có timestamp
    }
  });
// const upload = multer({ storage: _storege });
const upload = multer({ storage: storage });

module.exports = upload;
