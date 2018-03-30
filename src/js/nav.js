import loadHome from './home'
import loadAbout from './about';
import loadProjects from './projects';
import loadContact from './contact';

export default function menuToggle() {
  $('.nav-list').on('click', '#home, #about, #projects, #contact', (e) => {
    e.preventDefault();
    const id = e.target.id;
    if (id === 'home') {
      loadHome();
    }
    if (id === 'about') {
      loadAbout();
    }
    if (id === 'projects') {
      loadProjects();
    }
    if (id === 'contact') {
      loadContact();
    }
  });
}
