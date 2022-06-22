import {
  SET_TRACKS,
  ADD_TRACKS,
  SET_ALBUMS,
  ADD_ALBUMS,
  SET_ARTISTS,
  ADD_ARTISTS,
  SET_PLAYLIST,
  ADD_PLAYLIST
} from '../utils/constants';
import { get } from '../utils/api';

export const setTracks = (tracks) => ({
  type: SET_TRACKS,
  tracks
});

export const addTracks = (tracks) => ({
  type: ADD_TRACKS,
  tracks
});

export const setAlbums = (albums) => ({
  type: SET_ALBUMS,
  albums
});

export const addAlbums = (albums) => ({
  type: ADD_ALBUMS,
  albums
});

export const setArtists = (artists) => ({
  type: SET_ARTISTS,
  artists
});

export const addArtists = (artists) => ({
  type: ADD_ARTISTS,
  artists
});

export const setPlayList = (playlists) => ({
  type: SET_PLAYLIST,
  playlists
});

export const addPlaylist = (playlists) => ({
  type: ADD_PLAYLIST,
  playlists
});

export const initiateGetResult = (searchTerm) => {
  return async (dispatch) => {
    try {
      const API_URL = `https://api.spotify.com/v1/search?q=${encodeURIComponent(
        searchTerm
      )}&type=track,album,artist,playlist`;
      const result = await get(API_URL);
      console.log(result);
      const { tracks, artists, playlists } = result;
      // dispatch(setTracks(tracks));
      dispatch(setAlbums(tracks));
      dispatch(setArtists(artists));
      return dispatch(setPlayList(playlists));
    } catch (error) {
      console.log('error', error);
    }
  };
};

export const GetAudioFeatures = (id) => {
  return async (dispatch) => {
    try {
      // console.log('track: '+id);
      const API_URL = `https://api.spotify.com/v1/audio-features/${encodeURIComponent(
        id
      )}`;
      const result = await get(API_URL);
      console.log(result);
      // AddDataset(result);
      // alert('Energy = ' + result.energy);
      // let newResult = [...result];
      const value = 0.5;
      const mood = ({
        mood: ''
      });
      if(result.energy < value && result.valence < value) {
        mood.mood= 'Sedih';
      }else if(result.energy < value && result.valence > value) {
        mood.mood= 'Santai';
      }else if(result.energy > value && result.valence < value) {
        mood.mood= 'Marah';
      }else if(result.energy > value && result.valence > value) {
        mood.mood= 'Senang';
      }else mood.mood= 'Lain';
      console.log(mood);
      const newResult = {...result, ...mood}
      console.log('newResult');
      console.log(newResult);
      return dispatch(setTracks(newResult));
      // const { energy, tempo } = result;
      // return dispatch(setPlayList(playlists));
    } catch (error) {
      console.log('error', error);
    }
  };
};

export const getTrack = (id) => {
  return async (dispatch) => {
    try {
      const API_URL = `https://api.spotify.com/v1/tracks/${encodeURIComponent(
        id
      )}`;
      const result = await get(API_URL);
      // const artist = result.artists.map((artist) => artist.name).join(', ')
      return dispatch(setArtists(result));
      // const { energy, tempo } = result;
    } catch (error) {
      console.log('error', error);
    }
  };
};

export const resetDispatch = () => {
  return async (dispatch) => {
    try {
      const result = {};
      dispatch(setAlbums(result));
      return dispatch(setArtists(result));
    } catch (error) {
      console.log('error', error);
    }
  };
};

export const initiateLoadMoreTracks = (url) => {
  return async (dispatch) => {
    try {
      const result = await get(url);
      return dispatch(addTracks(result.tracks));
    } catch (error) {
      console.log('error', error);
    }
  };
};

export const initiateLoadMoreAlbums = (url) => {
  return async (dispatch) => {
    try {
      const result = await get(url);
      return dispatch(addAlbums(result.tracks));
    } catch (error) {
      console.log('error', error);
    }
  };
};

export const initiateLoadMoreArtists = (url) => {
  return async (dispatch) => {
    try {
      const result = await get(url);
      return dispatch(addArtists(result.artists));
    } catch (error) {
      console.log('error', error);
    }
  };
};

export const initiateLoadMorePlaylist = (url) => {
  return async (dispatch) => {
    try {
      const result = await get(url);
      return dispatch(addPlaylist(result.playlists));
    } catch (error) {
      console.log('error', error);
    }
  };
};
