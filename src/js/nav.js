import loadProjects from './projects';
import loadLab from './lab';

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
    if (e.target.id === 'lab') {
      $('.wrap1').hide();
      $('.wrap2').remove();
      $('.wrap3').remove();
      loadLab();
    }
  });
}
