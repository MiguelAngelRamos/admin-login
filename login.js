document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  const msg = document.getElementById('message');
  if(user === 'admin' && pass === 'admin123') {
    msg.innerHTML = '<div class="alert alert-success">Bienvenido, admin</div>';
  } else {
    msg.innerHTML = '<div class="alert alert-danger">Credenciales incorrectas</div>';
  }
});
