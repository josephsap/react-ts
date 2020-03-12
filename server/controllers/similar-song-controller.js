const SimilarSong = require('../models/similar-song');

createSimilar = (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'NOPE'
    });
  };
  
  const similar = new SimilarSong(body);
  if (!similar) return res.status(400).json({ error: err });

  similar.save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: similar._id,
        message: 'Similar created',
        title: similar._title
      });
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: 'Error, not created'
      });
    });
};

getSimilars = async (req, res) => {
  await SimilarSong.find({}, (err, similarSongs) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!similarSongs.length) {
      return res.status(404).json({ success: false, error: `Similar songs not found` });
    }
    return res.status(200).json({ success: true, data: similarSongs });
  })
  .catch (err => console.log(err));
};

module.exports = {
  createSimilar,
  getSimilars
};