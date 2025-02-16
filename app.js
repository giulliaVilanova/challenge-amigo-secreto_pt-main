//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {

    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (nome) {
        amigos.push(nome);
        input.value = "";
        atualizarLista();

    } else {
        alert("Por favor, insira um nome.")
    }
    console.log(amigos);
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach (nome => {
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    })
}

function sortearAmigo() {
    if (amigos.length) {
        let sorteiaIndice = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[sorteiaIndice];

        let resultado = document.getElementById("resultado");
        resultado.innerHTML = amigoSorteado;
    } else {
        alert("Você precisa informar os nomes dos seus amigos antes de sortear!")
    }
}