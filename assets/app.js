

const links = {
  home: document.getElementById('back'),
  about: document.getElementById('about-l'),
  projects: document.getElementById('projects-l'),
  contact: document.getElementById('contact-l')
}
const pages = {
  home: document.getElementById('home'),
  about: document.getElementById('about')
}


// back home 
links.home.addEventListener('click', () => {
  links.home.style.display = 'none'
  pages.about.style.display = 'none'
  pages.home.style.display = 'block'
});

links.about.addEventListener('click', () => {
  console.log('you clicked about')
  links.home.style.display = 'block'
  pages.home.style.display = 'none';
  pages.about.style.display = 'block';
});

console.log('links => ', links);
