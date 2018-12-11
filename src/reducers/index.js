import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    {
      title: 'No Scrub',
      duration: '4:05'
    },
    {
      title: 'Marcarena',
      duration: '2:30'
    },
    {
      title: 'All star',
      duration: '3:15'
    },
    {
      title: 'I want it that way',
      duration: '1:45'
    }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.paylaod;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
