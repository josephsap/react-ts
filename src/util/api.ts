import axios from 'axios';

const baseURL: string = 'http://localhost:3001/api';

export interface SongData {
  title: string;
  link: string;
  description: string;
  suggestedSongs?: []
}

type UpdateSongData = {
  title: string;
  link: string;
  description: string;
}

export default {
  songsAPI(endpoint: string) {
    return {
      getAllSongs: () => axios.get(`${baseURL}/${endpoint}`),
      createSong: (payload: SongData) => axios.post(`${baseURL}/${endpoint}`, payload),
      updateSong: (id: string, payload: UpdateSongData) => axios.put(`${baseURL}/${endpoint}/${id}`, payload)
    };
  },
};
