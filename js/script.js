// Definir el usuario y contraseña
const validUser = {
    email: "admin@gmail.com",
    password: "admin"
};

// Manejador de inicio de sesión
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = document.getElementById('email').value;
            const passwordInput = document.getElementById('password').value;

            if (emailInput === validUser.email && passwordInput === validUser.password) {
                window.location.href = 'register.html';
            } else {
                const errorMessage = document.getElementById('loginError');
                errorMessage.textContent = "Usuario o contraseña incorrectos.";
            }
        });
    }

    // Manejador de registro
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const lastname = document.getElementById('lastname').value;
            const identification = document.getElementById('identification').value;
            const emailRegister = document.getElementById('emailRegister').value;
            const phone = document.getElementById('phone').value;
            
            // Verificar si todos los campos están llenos
            if (!name || !lastname || !identification || !emailRegister || !phone) {
                alert("Todos los campos son obligatorios");
                return;
            }

            // Almacenar datos en localStorage
            const userData = { name, lastname, identification, emailRegister, phone };
            localStorage.setItem('userData', JSON.stringify(userData));

            // Redirigir a la página ok.html
            window.location.href = 'ok.html';
        });
    }

    // Mostrar datos en ok.html
    const okPage = document.getElementById('userData');
    if (okPage) {
        const storedData = JSON.parse(localStorage.getItem('userData'));
        if (storedData) {
            okPage.innerHTML = `
                <strong>Nombre:</strong> ${storedData.name} <br>
                <strong>Apellidos:</strong> ${storedData.lastname} <br>
                <strong>Identificación:</strong> ${storedData.identification} <br>
                <strong>Email:</strong> ${storedData.emailRegister} <br>
                <strong>Teléfono:</strong> ${storedData.phone} <br>
            `;
        }
    }
});
