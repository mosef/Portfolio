import * as icon from './socialicons';

export default function loadContact() {
  $('.wrap').remove();
  $('.content').append(`
    <div class="wrap three">
      <h1>Email me at:</h1>
      <h1><span class="s-pink">mosefasad</span>@gmail.com</h1>
      <h3>You can also find me on:</h3>
      <div class ="social-icons">
        <div class="s-icon">
          <a href="https://github.com/mosef" target="_blank">
            <img src=${icon.githubIcon} alt="" class="ico g" />
            <p>Github</p>
        </a>
        </div>
        <div class="s-icon">
          <a href="https://www.linkedin.com/in/mosef-asad-551ab4b2" target="_blank">
            <img src=${icon.linkedinIcon} alt="" class="ico l" />
            <p>LinkedIn</p>
          </a>
        </div>
        <div class="s-icon">
          <a href="https://twitter.com/MosefAsad" target="_blank">
            <img src=${icon.twitterIcon} alt="" class="ico t" />
            <p>Twitter</p>
          </a>
        </div>
        <div class="s-icon">
          <a href="https://labcollabworkspace.slack.com/" target="_blank">
            <img src=${icon.slackIcon} alt="" class="ico s" />
            <p>Slack</p>
          </a>
        </div>
      </div>
    </div>
  `);
}
