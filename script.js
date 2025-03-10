document.getElementById('day').addEventListener('change', function() {
    // Mostra o botão de aceitar o convite quando um dia for selecionado
    document.getElementById('accept-invite').classList.remove('hidden');
});

document.getElementById('button1').addEventListener('click', function() {
    // Captura o valor do dia escolhido
    const day = document.getElementById('day').value;

    // Se não foi selecionado um dia válido
    if (day === 'opcao') {
        alert("Por favor, selecione um dia.");
        return;  // Não faz nada se não tiver seleção
    }

    // Esconde o campo de seleção, o botão e o texto de introdução
    document.getElementById('select-day').classList.add('hidden');
    document.getElementById('accept-invite').classList.add('hidden');
    document.querySelector('p').style.display = 'none';  // Esconde o texto inicial

    // Exibe os detalhes
    document.getElementById('details').classList.remove('hidden');

    // Exibe o cronômetro e a mensagem
    document.getElementById('countdown-container').classList.remove('hidden');
    
    // Inicia o cronômetro
    startCountdown();

    // Exibe o dia escolhido
    document.getElementById('chosen-day').innerText = day; // Aqui exibimos diretamente o dia

    // Adiciona o efeito de confete ao confirmar o encontro
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
});

function startCountdown() {
    const countdownElement = document.getElementById('countdown');
    let seconds = 0;

    const interval = setInterval(function() {
        seconds++;
        
        // Calcula minutos e segundos
        let minutes = Math.floor(seconds / 60);
        let remainingSeconds = seconds % 60;

        // Formata a exibição no formato MM:SS
        countdownElement.innerText = `${padZero(minutes)}:${padZero(remainingSeconds)}`;

        // Se o cronômetro atingir 10 minutos, para (ajuste conforme necessário)
        if (seconds >= 600) {
            clearInterval(interval);
        }
    }, 1000); // Atualiza a cada segundo
}

// Função para adicionar zero à esquerda de números menores que 10
function padZero(number) {
    return number < 10 ? '0' + number : number;
}
