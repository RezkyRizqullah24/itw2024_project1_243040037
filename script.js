function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

  }
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzr4hKk7W9Vt5IiGgzG8Y1QhhWUYAEZAqKfL_zypaQNTA8ho0emst58XQtN8O3V01EH/exec'
  const form = document.forms['portofolio-contact-form']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
