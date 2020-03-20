const Song = require('../models/song');

createSong = (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'NOPE'
    });
  };
  
  const song = new Song(body);
  if (!song) return res.status(400).json({ error: err });

  song.save()
    .then(() => {
      return res.status(201).json({
        id: song._id,
        title: song._title,
        description: song._description
      });
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: 'Error, not created'
      });
    });
};

getSongs = async (req, res) => {
  await Song.find({}, (err, songs) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!songs.length) {
      return res.status(404).json({ success: false, error: `Similar songs not found` });
    }
    return res.status(200).json({ success: true, data: songs });
  })
  .catch (err => console.log(err));
};

updateSong = async (req, res) => {
  Song.findOne({ _id: req.params.id }, (err, song) => {
    console.log(req.body, 'rew body')
    song.suggestedSongs.push(req.body);
    song.save()
    .then(() => {
      return res.status(200).json({
        song,
      });
    })
    .catch(error => {
      return res.status(404).json({
        error,
        message: `not updated, ${error.message}`,
      })
    });
  });
}

module.exports = {
  createSong,
  getSongs,
  updateSong
};