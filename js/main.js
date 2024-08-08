const slideNavigator = (name) => {
  let slides = document.querySelectorAll('.bg-slide');
  slides.forEach((slide) => {
    slide.classList.remove('active');
    if (slide.classList.contains(name)) {
      slide.classList.add('active');
    }
  });
};

window.addEventListener('load', () => {
  const slideBtnList = document.querySelectorAll('.slide-btn');
  slideBtnList.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      slideBtnList.forEach((el) => {
        el.classList.remove('active');
      });
      e.target.classList.add('active');
      slideNavigator(e.target.getAttribute('data-target'));
    });
  });

  const navList = document.querySelectorAll('.nav-btn'); // Perbaikan: Gunakan ".nav-btn"
  navList.forEach((nav) => {
    nav.addEventListener('click', (e) => {
      e.preventDefault();
      navList.forEach((el) => {
        el.classList.remove('active');
      });
      e.target.classList.add('active');
      sectionNavigator(e.target.getAttribute('data-target'));
      screen.width < 768 && toggleMenu(); // Jika ada fungsi toggleMenu yang diaktifkan pada kondisi ini
    });
  });
});

const sectionNavigator = (name) => {
  let sections = document.querySelectorAll('section');
  let header = document.querySelector('header');
  sections.forEach((section) => {
    section.classList.remove('section-show');
    if (section.classList.contains(name)) {
      section.classList.add('section-show');
      header.classList.add('active');
    }
  });
};

const resetHeader = () => {
  let header = document.querySelector('header');
  header.classList.remove('active');
};

const initNavigation = () => {
  const navList = document.querySelectorAll('.nav-btn');
  navList.forEach((el) => {
    el.classList.remove('active');
    if (el.getAttribute('data-target') === 'about') {
      el.classList.add('active');
    }
  });
  sectionNavigator('about');
};

const toggleMenu = () => {
  const menu = document.querySelector('.menu');
  const navMobile = document.querySelector('.nav-mobile');
  menu.classList.toggle('active');
  navMobile.classList.toggle('active');
};
