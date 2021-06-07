

const links = {
  about: document.getElementById('about-l'),
  projects: document.getElementById('projects-l'),
  contact: document.getElementById('contact-l')
}
const pages = {
  home: document.getElementById('home'),
  about: document.getElementById('about')
}

links.about.addEventListener('click', () => {
  console.log('you clicked about')
  pages.home.style.display = 'none';
  pages.about.style.display = 'block';
});

console.log('links => ', links);
