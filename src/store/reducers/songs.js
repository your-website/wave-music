import data from "../../data";
import {
  SET_SONGS,
  SET_SONG_IS_PLAYING,
  SET_CURRENT_SONG,
  SET_AUDIO_REF,
} from "../actions/songs";

const initialState = {
  songsData: data(),
  isPlaying: false,
  currentSong: null,
  audioRef: null,
};

const songs = (state = initialState, action) => {
  switch (action.type) {
    case SET_SONGS:
      return {
        ...state,
        songsData: action.payload,
      };

    case SET_SONG_IS_PLAYING:
      return {
        ...state,
        isPlaying: action.payload,
      };

    case SET_CURRENT_SONG:
      return {
        ...state,
        currentSong: action.payload,
      };

    case SET_AUDIO_REF:
      return {
        ...state,
        audioRef: action.payload,
      };

    default:
      return state;
  }
};

export default songs;
