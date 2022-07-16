import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';
import App from '../components/App.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  $.ajax({
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    type: 'GET',
    data: {youtubeApiKey: YOUTUBE_API_KEY, q: query},
    success: callback
  });
};


export default searchYouTube;

//test