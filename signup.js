const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent default form submit
    localStorage.setItem('adtvUser', 'true'); // set user as logged in
    location.href = 'login.html'; // redirect to TV.html
  });