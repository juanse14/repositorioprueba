
let tabla= document.querySelector("#tabla");
let datos= [];

let in1= document.querySelector("#in1");
let in2= document.querySelector("#in2");
let in3= document.querySelector("#in3");


function addHeaders() {
    let fila = document.createElement("tr");
    let enc1 = document.createElement("th");
    enc1.innerHTML = "Materia";
    let enc2 = document.createElement("th");
    enc2.innerHTML = "Descripción";
    let enc3 = document.createElement("th");
    enc3.innerHTML = "Fecha";
  
    fila.appendChild(enc1);
    fila.appendChild(enc2);
    fila.appendChild(enc3);
    tabla.appendChild(fila);
  }
  
  function hacerTabla() {
    tabla.innerHTML = "";
    addHeaders();
    for (item of datos) {
      
      
      let fila = document.createElement("tr");
      // Creo los datos que van en la fila
      let tdMateria = document.createElement("td");
      tdMateria.innerHTML = item; //en su programa esto hara referencia al dato de materia ingresado por el usuario
      let tdDescripcion = document.createElement("td");
      tdDescripcion.innerHTML = item; //en su programa esto hara referencia al dato de descripcion ingresado por el usuario
      let tdFecha = document.createElement("td");
      tdFecha.innerHTML = item; ////en su programa esto hara referencia al dato de fecha ingresado por el usuario
  
      // Añado los nuevos datos como children de la fila
      fila.appendChild(tdMateria);
      fila.appendChild(tdDescripcion);
      fila.appendChild(tdFecha);
  
      // Añado la fila a la tabla
      tabla.appendChild(fila);
    }
    
  }
  
  let b1= document.querySelector("#b1");
  
  // Event listener
  function addItem() {
    // leer el valor que el usuario escribio
    let item = in1.value;
    datos.push(item);
    let item2 = in2.value; 
    datos.push(item2);
    let item3 = in3.value;
    datos.push(item3)
    
    hacerTabla();
    //Borrar lo que el usuario escribio
    in1.value = "";
    in2.value = "";
    in3.value = "";

  }
  b1.onclick = addItem;
  hacerTabla();