document.getElementById('day').addEventListener('change', function() {
    // Mostra o botão de aceitar o convite quando um dia for selecionado
    document.getElementById('accept-invite').classList.remove('hidden');
});

document.getElementById('button1').addEventListener('click', function() {
    // Captura o valor do dia escolhido
    const day = document.getElementById('day').value;
    
    // Definir o horário com base no dia escolhido
    let hourRange = '';

    if (day === 'domingo' || day === 'segunda' || day === 'terça' || day === 'quarta' || day === 'quinta') {
        hourRange = '17h - 22h';
    } else if (day === 'sexta' || day === 'sábado') {
        hourRange = '17h - 00h';
    }

    // Exibe os detalhes da escolha
    document.getElementById('chosen-day').innerText = ''; // Limpa o texto anterior

    // Função para criar efeito de digitação
    function typeWriter(element, text, speed) {
        let i = 0;
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Chama o efeito de digitação para o nome do dia
    typeWriter(document.getElementById('chosen-day'), day);

    // Não estamos mais manipulando o "chosen-hour" nem exibindo ele

    // Esconde o campo de seleção, o botão e o texto de introdução
    document.getElementById('select-day').classList.add('hidden');
    document.getElementById('accept-invite').classList.add('hidden');
    document.querySelector('p').style.display = 'none';  // Esconde o texto inicial

    // Exibe os detalhes
    document.getElementById('details').classList.remove('hidden');

    // Adiciona o efeito de confete ao confirmar o encontro
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
});

// Alternar tema de cores
document.getElementById('toggle-theme').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});
