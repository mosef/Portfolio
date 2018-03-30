import * as icon from './images';

export default function loadProjects() {
  $('.wrap').remove();
  $('.content').append(`
    <div class="wrap two">
      <h1>Projects</h1>
      <div class="project-1">
        <h3>Binge On</h3>
        <a href="https://mosef.github.io/BingeOn/" target="_blank">
          <img src=${icon.bingeOnIcon} alt="" class="p-icon" />
        </a>
        <p>React</p>
      </div>
      <div class="project-2">
        <h3>Minion Manager</h3>
        <a href="https://sheltered-coast-97878.herokuapp.com/" target="_blank">
          <img src=${icon.minionManagerIcon} alt="" class="p-icon" />
        </a>
        <p>React</p>
      </div>
      <div class="project-3">
      <h3>TypeQuick</h3>
        <a href="http://frosty-wright-cc1a68.netlify.com/" target="_blank">
          <img src=${icon.typeQuickIcon} alt="" class="p-icon" />
        </a>
        <p>React</p>
      </div>
    </div>
  `);
}
