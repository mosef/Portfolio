import $ from 'jquery';
import 'normalize.css';
import './src/css/index.css';
import menuToggle from './src/js/nav';
import loadHome from './src/js/home';

const WebFont = require('webfontloader');

$(() => {
  WebFont.load({
    google: {
      families: ['Montserrat: 200,300']
    }
  });
  loadHome();
  menuToggle();
});
