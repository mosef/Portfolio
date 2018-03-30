export default function loadHome() {
  $('.wrap').remove();
  $('.header-container').empty();
  $('.header-container').append(`
  <header role="banner" class="wrap home">
    <div class="intro">
      <div class="text-wrap">
        <h1>Hello I'm
          <span class="s-pink">Mosef Asad</span>
        </h1>
        <h2>I'm a Front End Web Developer</h2>
      </div>
      <button>View My Work</button>
    </div>
  </header>
  `);
}
