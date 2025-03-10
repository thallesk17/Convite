document.getElementById('button1').addEventListener('click', function() {
    document.getElementById('response').classList.remove('hidden');
    this.style.display = 'none';
});

document.getElementById('button2').addEventListener('click', function() {
    document.getElementById('details').classList.remove('hidden');
    this.style.display = 'none';
});
