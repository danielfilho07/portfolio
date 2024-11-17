// Simulação de um banco de dados em memória
const users = [
    { username: "admin", password: "12345678" }, // Exemplo de usuário cadastrado
    { username: "user1", password: "password123" } // Outro exemplo
];

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verifica se o usuário existe
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert("Login bem-sucedido!");
        window.location.href = "Prototipo 2.html"; // Redireciona para a página do protótipo
    } else {
        alert("Usuário ou senha incorretos. Redirecionando para cadastro.");
        window.location.href = "Cadastro.html"; // Redireciona para a página de cadastro
    }
});