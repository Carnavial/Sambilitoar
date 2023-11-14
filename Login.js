// Objeto para simular una base de datos temporal
const users = {
    // El usuario especial
    "admin@admin.com": "daniel24"
  };

// Función para validar el formato del correo electrónico
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Función para validar la contraseña (por ejemplo, longitud mínima de 6 caracteres)
function isValidPassword(password) {
    return password.length >= 6;
}

// Función para registrar un nuevo usuario
function registerUser(username, password) {
    if (!username) {
        return 'Ingrese un correo electrónico';
    }

    if (!isValidEmail(username)) {
        return 'Correo electrónico inválido';
    }

    if (!password) {
        return 'Ingrese una contraseña';
    }

    if (!isValidPassword(password)) {
        return 'La contraseña debe tener al menos 6 caracteres';
    }

    if (users[username]) {
        return 'El usuario ya está registrado';
    }

    users[username] = password;
    return 'Registro exitoso';
}

// Función para iniciar sesión
function loginUser(username, password) {
    if (!username) {
        return 'Ingrese un correo electrónico';
    }

    if (!isValidEmail(username)) {
        return 'Correo electrónico inválido';
    }

    if (!password) {
        return 'Ingrese una contraseña';
    }

    if (!users[username]) {
        return 'El usuario no está registrado';
    }

    if (users[username] !== password) {
        return 'Contraseña incorrecta';
    }

    return 'Inicio de sesión exitoso';
}

// Manejador de eventos para el formulario de registro
document.getElementById('register-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const registrationResult = registerUser(username, password);
    showMessage(registrationResult, registrationResult === 'Registro exitoso');
});

// Manejador de eventos para el formulario de inicio de sesión
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const loginResult = loginUser(username, password);
    showMessage(loginResult, loginResult === 'Inicio de sesión exitoso');
    
    if (loginResult === 'Inicio de sesión exitoso') {
        if (username === "admin@admin.com") {
            // Redireccionar a la página para el administrador si es el administrador
            window.location.href = "../../Administrador/anclas/HTML/Inicio.html";
        } else {
            // Redireccionar a la página para los usuarios normales
            window.location.href = "../HTML/inicio.html";
        }
    }
});

// Función para mostrar mensajes en el contenedor
function showMessage(message, isSuccess) {
    const messageContainer = document.getElementById('message');
    messageContainer.textContent = message;
    messageContainer.style.color = isSuccess ? 'green' : 'red';
}
