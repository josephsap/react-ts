const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SimilarSong = new Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('similarSongs', SimilarSong);
