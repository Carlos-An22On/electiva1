document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const loginContainer = document.querySelector('.login-container');
    
    // Animación de fade-in al cargar la página
    loginContainer.style.opacity = 0;
    setTimeout(() => {
        loginContainer.style.transition = 'opacity 1s';
        loginContainer.style.opacity = 1;
    }, 100);

    // Animación al hacer submit
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        loginContainer.style.transform = 'scale(0.95)';
        loginContainer.style.transition = 'transform 0.2s';

        setTimeout(() => {
            loginContainer.style.transform = 'scale(1)';
            alert('Iniciar sesión exitoso');
            loginForm.reset();
        }, 200);
    });
});
