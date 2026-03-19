// 1. Selecionando os elementos do DOM
const inputNome = document.getElementById('nome');
const inputSenha = document.getElementById('senha');
const botaoEnviar = document.getElementById('botao-enviar');

// 2. Função que será executada ao clicar no botão
botaoEnviar.addEventListener('click', function() {
    
    // Pegando os valores digitados e removendo espaços extras
    const usuario = inputNome.value.trim();
    const senha = inputSenha.value.trim();

    // 3. Validação Simples
    if (usuario === "" || senha === "") {
        alert("⚠️ Por favor, preencha todos os campos!");
        return; // Para a execução aqui
    }

    // 4. Simulação de autenticação
    if (usuario === "admin" && senha === "1234") {
        alert(`✅ Bem-vindo, ${usuario}! Login realizado com sucesso.`);
        // Aqui você poderia redirecionar o usuário:
        // window.location.href = "dashboard.html";
    } else {
        alert("❌ Usuário ou senha incorretos.");
    }
});

// BÔNUS: Permitir enviar ao apertar a tecla "Enter"
document.addEventListener('keypress', function(e) {
    if(e.key === 'Enter') {
        botaoEnviar.click();
    }
});