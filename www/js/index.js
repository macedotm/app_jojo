
function trocaClasse(elemento, antiga, nova) {
    elemento.classList.remove(antiga);
    elemento.classList.add(nova);
};


function troca() {
    var img = document.getElementById('jojo');
    img.setAttribute('src', 'img/dio.webp');

    var tit = document.getElementById('tit');
    tit.innerHTML = 'AHAHAHAAHAHA';

    var msg = document.getElementById('msg');
    msg.style.display = 'block';

    var bot = document.getElementById('bot');
    bot.style.display = 'block';
};

function resetar() {
    var img = document.getElementById('jojo');
    img.setAttribute('src', 'img/jojo.jpg');

    var tit = document.getElementById('tit');
    tit.innerHTML = 'Toque no Jonathan';

    var msg = document.getElementById('msg');
    msg.style.display = 'none';

    var bot = document.getElementById('bot');
    bot.style.display = 'none';
    bot.style.alignContent = 'center';
};

getElementById('jojo').onclick = function(){troca()}