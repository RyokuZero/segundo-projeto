function calcularNivelEExibirMensagem(vitorias, derrotas) {
    // Calcula o saldo de Ranqueadas subtraindo o número de derrotas do número de vitórias
    let saldoVitorias = vitorias - derrotas;
    let nivel = '';

    // Determina o nível do jogador com base no saldo de Ranqueadas
    if (vitorias < 10) {
        nivel = 'Ferro';
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = 'Bronze';
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = 'Prata';
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = 'Ouro';
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = 'Diamante';
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = 'Lendário';
    } else {
        nivel = 'Imortal';
    }

    // Exibe a mensagem com o saldo de Ranqueadas e o nível do jogador
    console.log(`O Herói tem saldo de ${saldoVitorias} está no nível de ${nivel}`);
}

// Exemplo de uso da função
const vitorias = 75;
const derrotas = 20;
calcularNivelEExibirMensagem(vitorias, derrotas);