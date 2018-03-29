import {
  webpackIcon,
  vueIcon,
  graphqIcon,
  meteorIcon,
  apolloIcon,
  parcelIcon } from './images';

export default function loadLab() {
  $('.content').append(`
    <div class="wrap2">
      <h1>Projects</h1>
      <div class="project-1">
        <h3>Binge On</h3>
        <a href="https://mosef.github.io/BingeOn/" target="_blank">
          <img src=${meteorIcon} alt="" class="p-icon" />
        </a>
        <p>React</p>
      </div>
    </div>
  `);
}