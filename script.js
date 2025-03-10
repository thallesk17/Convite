document.getElementById('button1').addEventListener('click', function() {
    // Exibe as informações dos horários antes da escolha do dia
    document.getElementById('info').classList.remove('hidden');
    this.style.display = 'none';
});

document.getElementById('response').addEventListener('submit', function(event) {
    event.preventDefault();

    const day = document.getElementById('day').value;
    let hourRange = '';

    // Definir o horário com base no dia escolhido
    if (day === 'domingo' || day === 'segunda' || day === 'terca' || day === 'quarta' || day === 'quinta') {
        hourRange = '17h - 22h';
    } else if (day === 'sexta' || day === 'sabado') {
        hourRange = '17h - 00h';
    }

    // Exibe os detalhes da escolha
    document.getElementById('chosen-day').innerText = day.charAt(0).toUpperCase() + day.slice(1); // Capitaliza o nome do dia
    document.getElementById('chosen-hour').innerText = hourRange;

    // Esconde a seleção do dia e exibe os detalhes
    document.getElementById('response').classList.add('hidden');
    document.getElementById('details').classList.remove('hidden');
});
