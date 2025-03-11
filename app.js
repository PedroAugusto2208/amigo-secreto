let amigos = [];

function adicionarAmigo() {
    const inputNome = document.getElementById("amigo");
    const nome = inputNome.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return; 
    }

    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado!");
        inputNome.value = ""; 
        return;
    }

    amigos.push(nome);

    inputNome.value = "";

    atualizarLista();
}

function atualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");

    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i]; 
        listaAmigos.appendChild(li); 
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para o sorteio.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceSorteado];

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `<h3>Amigo Secreto Sorteado</h3><p><strong>${amigoSorteado}</strong> foi sorteado!</p>`;
}
