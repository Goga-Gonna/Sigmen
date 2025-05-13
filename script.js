// Проверка регистрации (сохранение пользователя)
function registerUser() {
  let username = prompt('Введите ваш логин:');
  if (username) {
    localStorage.setItem('username', username);
    alert('Регистрация прошла успешно!');
  }
}

// Проверка, вошёл ли пользователь
function checkLogin() {
  let username = localStorage.getItem('username');
  if (username) {
    alert('Добро пожаловать, ' + username);
  } else {
    registerUser();
  }
}

checkLogin();

function copyIP() {
    const ip = document.getElementById("server-ip").innerText;
    navigator.clipboard.writeText(ip).then(() => {
      alert("IP скопирован: " + ip);
    }).catch(err => {
      alert("Ошибка копирования IP: " + err);
    });
  }


