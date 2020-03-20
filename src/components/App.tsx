import React, { useState, useEffect } from 'react';
import API, { SongData, SuggestedSongData } from '../util/api';

export interface AllSongs {
  suggestedSongs: [SuggestedSongData];
  results: SongData[];
  title: string;
  _id: string;
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

  const suggestedSongs = (songSuggestionArray: any[]) => {
    return (
      songSuggestionArray.map((suggestion, index) => {
        return (
          <li key={index}>
            <h3>{suggestion.title}</h3>
            <p>{suggestion.description}</p>
            <a href={suggestion.link}>Song Link</a>
          </li>
        );
      })
    )
  };

  return (
    <div>
      {songsArray.map(songItem => {
        return (
          <div key={songItem._id}>
            <h2>{songItem.title}</h2>
            <ul>
              {suggestedSongs(songItem.suggestedSongs)}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default App;
