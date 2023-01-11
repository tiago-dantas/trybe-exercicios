//  ========== VARIÁVEIS GLOBAIS ==========
const btnSubmit = document.querySelector('#submit');
const btnReset = document.querySelector('#apagar');
const nome = document.querySelector('#name').value;
const email = document.querySelector('#email').value;
const answer = document.querySelector('#answer').value;
const check2 = document.querySelector('#check2').value;
const conteudo = [nome, email, answer, check2];

// ========== FUNÇÕES ==========
const toggleButton = () => {
    if (conteudo !== null && conteudo !== '') {
        document.getElementById('submit').disabled = false;
    } else {
        document.getElementById('submit').disabled = true;
    };
}

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Formulário Enviado: Boa Sorte!');
    document.querySelector('#form').reset();
});

btnReset.addEventListener('click', () => {
    document.querySelector('#form').reset();
});
console.log(btnSubmit);
// ========== CHAMADAS ==========
window.onload = () => {
    console.log('teste');
};
