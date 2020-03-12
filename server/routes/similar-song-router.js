const express = require('express');

const SimilarSongsCtrl = require('../controllers/similar-song-controller');

const router = express.Router();

router.post('/similar', SimilarSongsCtrl.createSimilar);
router.get('/similars', SimilarSongsCtrl.getSimilars);

module.exports = router;
