import loadProjects from './projects';
import loadLab from './lab';
import loadContact from './contact';

export default function menuToggle() {
  $('.nav-list').on('click', '#about, #projects, #lab, #contact', (e) => {
    e.preventDefault();
    if (e.target.id === 'about') {
      $(".wrap").remove();
      $('.init-wrap').show();
    } else{
      $('.init-wrap').hide();
    }
    if (e.target.id === 'projects') {
      $('.wrap').remove();
      loadProjects();
    }
    if (e.target.id === 'lab') {
      $('.wrap').remove();
      loadLab();
    }
    if (e.target.id === 'contact') {
      $('.wrap').remove();
      loadContact();
    }
  });
}
