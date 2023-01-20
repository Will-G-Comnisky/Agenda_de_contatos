const form = document.getElementById('agenda-contatos');

const imgContatoAdicionado = '<img src="./images/user_check_icon 2.png"  alt="ícone de contato com check" />'
const contatos = [];
const numeros = [];

document.getElementById("telefone-contato").addEventListener("input", formatPhoneNumber);

function formatPhoneNumber() {
    var input = document.getElementById("telefone-contato");
    var value = input.value;

    value = value.replace(/\D/g, '').replace(/^(\d{3})(\d{5})(\d{4})/, "($1)$2-$3");
  
    input.value = value;
  }

  function validatePhoneNumber() {
    var input = document.getElementById("telefone-contato");
    var value = input.value;
  

    var numericValue = value;

  
    // Verificar se o número de digitos é 12
    if (numericValue.length !== 12) {
      input.setCustomValidity("Telephone number must have 12 digits");
    } else {
      input.setCustomValidity("");
    }
  }
  

let linhas = ' ';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
})

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefoneContato = document.getElementById('telefone-contato');

    if (numeros.includes(inputTelefoneContato.value)) {
        alert(`Este contato ${inputTelefoneContato.value} já foi inserido`)
    } else { 

    numeros.push(inputTelefoneContato.value);
    contatos.push(parseFloat(inputNomeContato.value));

    let linha = '<tr>';
    linha += `<td> ${inputNomeContato.value}</td>`;
    linha += `<td> ${inputTelefoneContato.value}</td>`;
    linha += '<td><img src="./images/user_check_icon 2.png" </td>';
    linha += '<td><button onclick="removeRow(this)"><img src="./images/Remove_contact_icon.png"></button> </td>';
    linha += '</tr>';

    linhas += linha;
    }

    inputNomeContato.value = '';
    inputTelefoneContato.value = '';
}

let table = document.getElementsByTagName("table")[0];
function removeRow(btn) {
    let row = btn.parentNode.parentNode;
    let phone = row.children[1].innerHTML;
    let index = numeros.indexOf(phone);
    numeros.splice(index, 1);
    contatos.splice(index, 1);
    table.deleteRow(row.rowIndex);
    linhas = table.getElementsByTagName("tbody")[0].innerHTML;
  }





function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
