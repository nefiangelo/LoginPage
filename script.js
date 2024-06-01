const loginButton = document.querySelector('.login-button');
const inputUsuario = document.getElementById('inputUsuario');
const inputSenha = document.getElementById('inputSenha');

loginButton.addEventListener('click', function() {
    // Adiciona a classe que dispara a animação
    this.classList.add('popup-animation');

    // Remove a classe após a animação terminar
    setTimeout(() => {
        this.classList.remove('popup-animation');
    }, 500);
});

loginButton.addEventListener('click', function() {
    if (inputUsuario.value !== '' && inputSenha.value !== '') {
        // Os campos estão preenchidos
        setTimeout(() => {
            alert("Parabéns! Você acaba de fazer login :)");
        }, 1000);
    } else {
        // Um ou ambos os campos estão vazios
        alert("Por favor, preencha todos os campos!");
    }
});

inputUsuario.addEventListener('focus', function() {
    // Limpa o valor do placeholder quando o input recebe foco
    this.placeholder = '';
});

inputUsuario.addEventListener('blur', function() {
    // Restaura o valor do placeholder quando o input perde o foco
    this.placeholder = 'example@login.com';
});

inputSenha.addEventListener('focus', function() {
    // Limpa o valor do placeholder quando o input recebe foco
    this.placeholder = '';
});

inputSenha.addEventListener('blur', function() {
    // Restaura o valor do placeholder quando o input perde o foco
    this.placeholder = 'Str0ngP4ssw0rd!';
});