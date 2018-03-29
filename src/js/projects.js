import { bingeOnIcon, minionManagerIcon, typeQuickIcon } from './images';
export default function loadProjects() {
  $('.content').append(`
    <div class="wrap2">
      <h1>Projects</h1>
      <div class="project-1">
        <h3>Binge On</h3>
        <a href="https://mosef.github.io/BingeOn/" target="_blank">
          <img src=${bingeOnIcon} alt="" class="p-icon" />
        </a>
        <p>React</p>
      </div>
      <div class="project-2">
        <h3>Minion Manager</h3>
        <a href="https://sheltered-coast-97878.herokuapp.com/" target="_blank">
          <img src=${minionManagerIcon} alt="" class="p-icon" />
        </a>
        <p>React</p>
      </div>
      <div class="project-3">
      <h3>TypeQuick</h3>
        <a href="http://frosty-wright-cc1a68.netlify.com/" target="_blank">
          <img src=${typeQuickIcon} alt="" class="p-icon" />
        </a>
        <p>React</p>
      </div>
    </div>
  `);
}