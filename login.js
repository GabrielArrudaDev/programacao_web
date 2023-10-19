document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('floatingInput').value;
        const password = document.getElementById('floatingPassword').value;

        // Verifica se o email e a senha estão corretos
        if (email === "123@123.com" && password === "123") {
            window.location.replace("index.html"); // Redireciona para index.html se as credenciais estiverem corretas
        } else {
            alert("Credenciais incorretas. Tente novamente."); // Exibe um alerta se as credenciais estiverem incorretas
        }
    });
});


        function togglePassword(elementId) {
            var x = document.getElementById(elementId);
            if (x.type === "password") {
                x.type = "text";
            } else {
                x.type = "password";
            }
        }




