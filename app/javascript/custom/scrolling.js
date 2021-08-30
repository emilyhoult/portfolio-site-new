import AOS from 'aos';

document.addEventListener('DOMContentLoaded', function() {
  AOS.init({
    startEvent: 'turbolinks:load' // if you are using turbolinks
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
  });
});
