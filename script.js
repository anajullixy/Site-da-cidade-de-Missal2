// (1) Constante para armazenar a curiosidade
const curiosity = "MISSAL: PERTENCENTE A 2ª GERAÇÃO DE IMIGRANTES ALEMÃES.";

// (2) Função para mostrar a curiosidade ao usuário
function showCuriosity() {
    const messageElement = document.getElementById('message');
    
    // (3) Condicional para verificar se a curiosidade já foi mostrada
    if (messageElement.innerHTML === curiosity) {
        messageElement.innerHTML = "Você já viu esta curiosidade!";
    }
else {
        messageElement.innerHTML = curiosity;
    }
}