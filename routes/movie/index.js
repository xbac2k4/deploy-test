const express = require('express');
const router = express.Router();
const MovieController = require('../../controllers/MovieController');
const authenticateToken = require('../../middlewares/auth');
// const Upload = require('../../config/common/upload');
// const multer = require('multer');
// Cấu hình multer để lưu file vào bộ nhớ (RAM)
const upload = require('../../config/common/upload');
// const { upload, uploadToS3 } = require('../../config/common/s3Upload');
// Movie
router.get('/get-movie-by-page', new MovieController().getMovieByPage);
router.get('/get-movie', new MovieController().getAllMovie);
router.get('/get-movie-by-id/:id', new MovieController().getMovieByID);
router.post('/add-movie-with-image', new MovieController().addMovieWithImage);
// router.post('/add-movie-with-image', upload.single('image'), new MovieController().addMovieWithImage);
// router.put('/update-movie-with-image/:id', upload.single('image'), new MovieController().updateMovieWithImage);
router.delete('/delete-movie/:id', new MovieController().deleteMovie);

module.exports = router;
