import * as icon from './socialicons';

export default function loadContact() {
  $('.wrap').remove();
  $('.content').append(`
    <div class="wrap three">
      <h1>Email me at:</h1>
      <h1><span class="s-pink">mosefasad</span>@gmail.com</h1>
      <h3>You can also find me on:</h3>
      <div class ="social-icons>
        <p>Github</p>
        <img src=${icon.githubIcon} alt=""/>
        <p>LinkedIn</p>
        <img src=${icon.linkedinIcon} alt=""/>
        <p>Slack</p>
        <img src=${icon.slackIcon} alt=""/>
        <p>Twitter</p>
        <img src=${icon.twitterIcon} alt=""/>
      </div>
    </div>
  `);
}
