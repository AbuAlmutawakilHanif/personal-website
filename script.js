document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('menu-toggle');
  const sideMenu = document.getElementById('side-menu');
  const sideMenuLinks = sideMenu.querySelectorAll('a');

  toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    sideMenu.classList.toggle('active');
  });

  sideMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
      sideMenu.classList.remove('active');
      toggleBtn.classList.remove('active');
    });
  });

  // Close side menu if click outside side menu and hamburger
  document.addEventListener('click', (e) => {
    const isClickInsideMenu = sideMenu.contains(e.target);
    const isClickOnToggle = toggleBtn.contains(e.target);

    if (!isClickInsideMenu && !isClickOnToggle && sideMenu.classList.contains('active')) {
      sideMenu.classList.remove('active');
      toggleBtn.classList.remove('active');
    }
  });
});



function showContent(id) {
      document.getElementById('skills').style.display = 'none';
      document.getElementById('projects').style.display = 'none';
      document.getElementById(id).style.display = 'block';
    }