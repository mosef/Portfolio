import { binge, minion, type } from './images';

export function menuToggle() {
  $('.nav-list').on('click', '#about, #projects, #lab, #contact', (e) => {
    e.preventDefault();
    console.log(e.target.id);
    if (e.target.id === 'about') {
      $(".wrap2, .wrap3, .wrap4").remove();
      $('.wrap1').show();
    } else{
      $('.wrap1').hide();
    }
    if (e.target.id === 'projects') {
      $('.wrap2').remove();
      loadProjects();
    }
  });
}

function loadProjects() {
  const url = require('../img/react.png')
  $('.content').append(`
    <div class="wrap2">
      <h1>Projects</h1>
      <div class="project-1">
        <h3>Binge On</h3>
        <img src=${binge} alt="" class="p-icon" />
        <p>React</p>
      </div>
      <div class="project-2">
        <h3>Minion Manager</h3>
        <img src=${minion} alt="" class="p-icon" />
        <p>React</p>
      </div>
      <div class="project-3">
      <h3>TypeQuick</h3>
        <img src=${type} alt="" class="p-icon" />
        <p>React</p>
      </div>
    </div>
  `);
}
