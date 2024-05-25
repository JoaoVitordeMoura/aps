let el = document.querySelector('.number-days');
let htmlContent = '';

for (let i = 1; i <= 31; i++) {
    htmlContent += '<span>' + i + '</span>';
}

el.innerHTML = htmlContent;

let el2 = document.querySelectorAll('.number-days')[1];

let htmlContent2 = '';

for (let i = 1; i <= 30; i++) {
    htmlContent2 += '<span>' + i + '</span>';
}

el2.innerHTML = htmlContent2;

/*Botões de redirecionamento*/

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');

btn1.addEventListener('click', function () {
    window.location.href = 'sementes.html';
});

btn2.addEventListener('click', function () {
    window.location.href = 'solo.html';
});

btn3.addEventListener('click', function () {
    window.location.href = 'economia.html';
});

btn4.addEventListener('click', function () {
    window.location.href = 'rotacao.html';
});

/*Botões de redirecionamento*/


