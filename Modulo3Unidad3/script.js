// Ejericio 1

// Crear el código que dada una distancia determine el medio de transporte apropiado de acuerdo a las siguientes reglas:

// 0 a 1000 metros = pie

// 1000 a 10000 metros = bicicleta

// 10000 a 30000 metros = colectivo

// 30000 a 100000 metros = auto

// +100000 = avion

function calcularDistancia(){
    let mensaje = parseInt(prompt("Ingrese la distancia en metros"));
    if(mensaje > 0 && mensaje < 1000){
        alert(`Se recomienda ir a pie cuando quiera recorrer ${mensaje} metros de cistancia`);
    } else if(mensaje >= 1000 && mensaje < 10000){
        alert(`Se recomienda ir en bicicleta cuando quiera recorrer ${mensaje} metros de cistancia`);
    } else if(mensaje >= 10000 && mensaje < 30000){
        alert(`Se recomienda ir en colectivo cuando quiera recorrer ${mensaje} metros de cistancia`);
    } else if(mensaje >= 30000 && mensaje < 100000){
        alert(`Se recomienda ir en auto cuando quiera recorrer ${mensaje} metros de cistancia`);
    } else if(mensaje >= 10000 ){
        alert(`Se recomienda ir en avion cuando quiera recorrer ${mensaje} metros de cistancia`);
    }
    if(mensaje === NaN){
        alert("No ha ingresado un numero valido");
    }
    if(mensaje <= 0){
        alert("No ha ingresado una distancia mayor a 0");
    }
}


//Crear el código que reciba como parámetro un array de números y devuelva el mayor.

function calcularMaximo(...arr){//Utilizo el spread operator, para que me tome el parametro como un array y asi poder usar los array methods
    let mensaje;
    do{
        mensaje = prompt("Ingrese la cantidad de numeros que quiera, escriba PARE, para dejar de ingresar");
        arr.push(mensaje);
        //console.log(arr)
    } while( mensaje !== "PARE"){
        alert("terminaste de adicionar");
    }
    arr.pop();
    let maximo = Math.max(...arr); //Use otra vez el spread operator para que me tome los numeros dentro del array, sin el spread el resultado es NaN
    console.log(maximo)
    //Otra forma que no entendi muy bien es usar el array method reduce, lo dice en la documentacion pero me falta profundizarlo
    // const max = arr.reduce((a, b) => Math.max(a, b), -Infinity);
    // console.log(max)    

    return alert(`El maximo numero del array ${arr} es ${maximo}`)
}
