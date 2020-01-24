//Criar Elementos e atributos de elementos a partir do JS

var linkElement = document.createElement('a');
function mostraDado()
{
    alert('teupai');
}
linkElement.setAttribute('onclick', 'mostraDado()');
linkElement.setAttribute('title', 'Tuamae');

var textElement = document.createTextNode('Acessar o teu pai');
linkElement.appendChild(textElement);


var containerElement = document.querySelector('#app');
containerElement.appendChild(linkElement);

var buttonElement = document.createElement('button');
buttonElement.innerHTML = 'Remover texto';
containerElement.appendChild(buttonElement);
buttonElement.onclick = function(){
    containerElement.removeChild(linkElement);
    containerElement.removeChild(document.querySelector('#botao'));
}


