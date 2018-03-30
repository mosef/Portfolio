import $ from "jquery";
import 'normalize.css';
import './src/css/index.css';
import menuToggle from './src/js/nav';
import loadHome from './src/js/home';

$(() => {
  loadHome();
  menuToggle();
});
