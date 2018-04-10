import * as icon from './abouticons';

export default function loadAbout() {
  $('.wrap').remove();
  $('.content').append(`
<div class="wrap one">
  <div class="about-wrapper">
    <h1>About</h1>
    <div class="profile-pic"></div>
    <p> I'm a MERN stack developer and an emerging web tech enthusiast. Any time 
      there's an update in a language or framework I'm there watching the demos, 
      taking notes, and thinking of what to build next. Building lends
      itself participating in discussion channels, or working in groups with 
      other developers which is exciting. If I'm not working on anything I 
      like to play some games online or read, maybe indulge in a few table 
      top games!
    </p>
  </div>
  <div class="lang-grid">
    <ul class="icon-list">
      <div class="front-end">
        <h3>Front End</h3>
        <li>
          <img src=${icon.reactIcon} alt="" class="l-icon" />
          <p>React</p>
        </li>
        <li>
          <img src=${icon.reduxIcon} alt="" class="l-icon" />
          <p>Redux</p>
        </li>
        <li>
          <img src=${icon.jsIcon} alt="" class="l-icon" />
          <p>JavaScript</p>
        </li>
        <li>
          <img src=${icon.jqueryIcon} alt="" class="l-icon" />
          <p>jQuery</p>
        </li>
        <li>
          <img src=${icon.gitIcon} alt="" class="l-icon" />
          <p>Git</p>
        </li>
        <li>
          <img src=${icon.sassIcon} alt="" class="l-icon" />
          <p>Sass</p>
        </li>
        <li>
          <img src=${icon.cssIcon} alt="" class="l-icon" />
          <p>CSS3</p>
        </li>
        <li>
          <img src=${icon.htmlIcon} alt="" class="l-icon" />
          <p>HTML5</p>
        </li>
      </div>
      <div class="back-end">
        <h3>Back End</h3>
        <li>
          <img src=${icon.nodeIcon} alt="" class="l-icon" />
          <p>Node</p>
        </li>
        <li>
          <img src=${icon.expressIcon} alt="" class="l-icon" />
          <p>Express</p>
        </li>
        <li>
          <img src=${icon.mongoDbIcon} alt="" class="l-icon leaf" />
          <p>MongoDb</p>
        </li>
        <li>
          <img src=${icon.mochaIcon} alt="" class="l-icon" />
          <p>Mocha</p>
        </li>
        <li>
          <img src=${icon.travisIcon} alt="" class="l-icon" />
          <p>Travis CI</p>
        </li>
      </div>
      <div class="design-tools">
        <div class="break"></div>
        <h3>Design Tools</h3>
        <li>
          <img src=${icon.illustratorIcon} alt="" class="l-icon" />
          <p>illustrator</p>
        </li>
        <li>
          <img src=${icon.photoshopIcon} alt="" class="l-icon" />
          <p>Photoshop</p>
        </li>
        <li>
          <img src=${icon.sketchIcon} alt="" class="l-icon" />
          <p>Sketch</p>
        </li>
        <li>
          <img src=${icon.figmaIcon} alt="" class="l-icon" />
          <p>Figma</p>
        </li>
      </div>
    </ul>
  </div>
</div>
  `);
}

