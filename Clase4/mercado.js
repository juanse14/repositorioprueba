let compras = ["Arroz", "Lentejas", "Papas"];
let lista = document.querySelector("#ListaMercado");
//Necesario crear bucle.
//Opcion 1: for
//for (let i = 0; i < compras.length; i++)
//{
   // let elemento = document.createElement("li");
    //elemento.innerHTML = compras[i];
    //lista.appendChild(elemento);
//}

//Opcion 2: for of

function hacerLista() {
    lista.innerHTML = "";
    for (item of compras)
{
    let elemento = document.createElement("li");
    elemento.innerHTML = item ;
    lista.appendChild(elemento);
}

}


let input = document.querySelector("#inputAdd");
let b1 = document.querySelector("#b1");

//Event Listener
function addItem(){
    //leer el valor que el usuario escribió
    let item = input.value;
    compras.push(item)
    hacerLista();
    //Borrar lo que el usuario escribió de la barra
    input.value = "";
}

b1.onclick = addItem;
hacerLista();

