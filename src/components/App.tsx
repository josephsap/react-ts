import React, { useState, useEffect } from 'react';
import API, { SongData } from '../util/api';

export interface AllSongs {
  results: SongData[];
}

const App = () => {
  const [songsArray, setSongsArray] = useState<AllSongs[]>([]);

  useEffect(() => {
    API.songsAPI('songs').getAllSongs()
    .then(response => {
      const { data } = response.data;
      setSongsArray(data);
    })
    .catch(error => {
      console.log(error.message);
    });
  }, []);

  return (
    <p>s9989</p>
  );
};

export default App;
