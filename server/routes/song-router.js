const express = require('express');

const SongController = require('../controllers/song-controller');

const router = express.Router();

router.post('/song', SongController.createSong);
router.put('/song/:id', SongController.updateSong);
router.get('/songs', SongController.getSongs);

module.exports = router;
