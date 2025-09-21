
let amigos = [];

function agregarAmigo() {
  let nombreAmigo = document.getElementById("amigo").value;

  nombreAmigo = nombreAmigo.toUpperCase()

  if (nombreAmigo.trim() === "") {
    alert("Por favor, inserte un nombre");
  }
  if (!isNameValid(nombreAmigo)) {
    showError("El nombre que ingresaste está repetido o no es válido.");
    return;
  } else {
    amigos.push(nombreAmigo);
    document.querySelector("#amigo").value = "";
    mostrarListaAmigo();
  }
}

function isNameValid(name) {
    return name.trim() !== "" && !amigos.includes(name);
  }

function showError(message) {
    const error = document.getElementById("error");
    if (error) {
      error.textContent = message;
      error.style.display = "block";
        setTimeout(() => {
        error.style.display = "none";
      }, 3000);
    }
  }

function mostrarListaAmigo() {
  let listaAmigos = document.querySelector("#listaAmigos");
  listaAmigos.innerHTML = "";

  for (let index = 0; index < amigos.length; index++) {
    const element = amigos[index];

    let listaHTML = document.createElement("li");
    listaHTML.textContent = element;
    listaAmigos.appendChild(listaHTML);
  }
}


function sortearAmigo() {
 
    if (amigos.length === 0) {
        alert("No Ha Insertado Nombres O Ya Todos Fueron Sorteados");
        return;
    }

    let indiceAmigo = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAmigo];

    let resultadoHTML = document.querySelector("#resultado");
    resultadoHTML.innerHTML = amigoSorteado;

    amigos.splice(indiceAmigo, 1);
    
    let listaAmigos = document.querySelector("#listaAmigos");
    listaAmigos.innerHTML = "";
  
    for (let index = 0; index < amigos.length; index++) {
      const element = amigos[index];
  
      let listaHTML = document.createElement("li");
      listaHTML.textContent = element;
      listaAmigos.appendChild(listaHTML);
    }
    
}

function enfocarInput() {
    document.getElementById("amigo").focus();
  }