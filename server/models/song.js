const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Song = new Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  suggestedSongs: ['suggestedSong']
});

module.exports = mongoose.model('song', Song);
