document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validação simples
    if (username.length < 3) {
        alert("O nome de usuário deve ter pelo menos 3 caracteres.");
        return;
    }

    if (password.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        return;
    }

    if (password !== confirmPassword) {
        alert("As senhas não coincidem.");
        return;
    }

    // Aqui você pode adicionar a lógica para salvar os dados do usuário
    alert("Cadastro realizado com sucesso!");
    window.location.href = "prototipo 2.html"; // Redireciona para a página de login
});