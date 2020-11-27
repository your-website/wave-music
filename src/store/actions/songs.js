export const SET_SONGS = "SET_SONGS";
export const SET_SONG_IS_PLAYING = "SET_SONG_IS_PLAYING";
export const SET_CURRENT_SONG = "SET_CURRENT_SONG";
export const SET_AUDIO_REF = "SET_AUDIO_REF";

export const setSongs = (arraySongs, id) => {
  const newSongs = arraySongs.map((song) => {
    if (song.id === id) {
      return {
        ...song,
        active: true,
      };
    } else {
      return {
        ...song,
        active: false,
      };
    }
  });
  return {
    type: SET_SONGS,
    payload: newSongs,
  };
};

export const setSongIsPlaying = (value) => ({
  type: SET_SONG_IS_PLAYING,
  payload: value,
});

export const setCurrentSong = (currentSong) => ({
  type: SET_CURRENT_SONG,
  payload: currentSong,
});

export const setAudioRef = (audioRef) => ({
  type: SET_AUDIO_REF,
  payload: audioRef,
});
