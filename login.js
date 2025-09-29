const form = document.getElementById('login-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('Username').value;
    if(username) {
localStorage.setItem('adtvUser', username); // set user as logged in
location.href = 'TV.html'; // redirect to TV.html
    }
  });