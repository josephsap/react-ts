const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const suggestedSong = require('./suggested-song');

const Song = new Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  suggestedSongs: ['suggestedSong']
});

module.exports = mongoose.model('song', Song);
