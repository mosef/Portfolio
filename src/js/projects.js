import * as icon from './projecticons';

export default function loadProjects() {
  $('.wrap').remove();
  $('.content').append(`
    <div class="wrap two">
      <h1>Projects</h1>
      <div class="project one">
        <h3>Binge On</h3>
        <a href="https://mosef.github.io/BingeOn/" target="_blank">
          <div class ="preview"><p>View Project</p></div>
          <img src=${icon.bingeOnIcon} alt="" class="p-icon" />
        </a>
        <p>Finished watching a show? Try finding similar shows to watch with a video
          preview. Built using the YouTube API and TasteDive API.
        </p>
      </div>
      <div class="project two">
        <h3>Minion Manager</h3>
        <a href="https://sheltered-coast-97878.herokuapp.com/" target="_blank">
          <div class ="preview"><p>View Project</p></div>
          <img src=${icon.minionManagerIcon} alt="" class="p-icon" />
        </a>
        <p> An Express app that helps table top hosts keep track of relevant player
        data while preventing players from editing the data between sessions.
        </p>
      </div>
      <div class="project three">
      <h3>TypeQuick</h3>
        <a href="https://typequick.netlify.com/" target="_blank">
          <div class ="preview"><p>View Project</p></div>
          <img src=${icon.typeQuickIcon} alt="" class="p-icon" />
        </a>
        <p>A MERN stack app that helps developers code faster through learning
        syntax shortcuts and code challenges. You can keep track of your progress
        through chart data that shows your fastest challenge times.
        </p>
      </div>
    </div>
  `);
}
