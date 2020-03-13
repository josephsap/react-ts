const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SuggestedSong = new Schema({
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
  }
});

module.exports = mongoose.model('suggestedSong', SuggestedSong);
