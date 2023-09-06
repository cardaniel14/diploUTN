// <!-- Ejercicio 1: Crear un documento html con 3 cuadrados que, al ser clickeados, 
//     cambien el color de fondo del documento. 
//     Cada cuadrado debera tener un color distinto. -->

function bgChange(event) {
    let body = document.querySelector("body");

    if (event.target.className == "red") {
        body.style.backgroundColor = "red";
    }
    if (event.target.className == "green") {
        body.style.backgroundColor = "green";
    }
    if (event.target.className == "blue") {
        body.style.backgroundColor = "blue";
    }

}

// Ejercicio 2: 

// Programar un contador de caracteres para un textarea.

function inputText() {
    let body = document.querySelector("body");
    let text = document.querySelector(".contador");
    let input = document.querySelector("input");
    input.addEventListener("keypress", (e) => {
        body.style.backgroundColor = "white";
        if (e.code === "Enter") {
            let str = input.value.length;
            text.textContent = `Haz escrito ${str} caracteres`
        }
    })
}
inputText()

// Ejercicio 3:
// Dado el siguiente array de alumnos utilizar los métodos de array vistos para generar un array con los alumnos aprobados. 
//Se considera aprobado todo alumno que tenga una nota mayor o igual a 7.

var alumnos = [
    {
        nombre: 'Juan Gomez',
        nota: 7
    }, 
    {
        nombre: 'Pedro Rodriguez',
        nota: 4
    }, 
    {
        nombre: 'Roxana García',
        nota: 8
    }, 
    {
        nombre: 'Luciano Lopez',
        nota: 5
    }, 
    {
        nombre: 'Fernanda Gimenez',
        nota: 6
    }, 
    {
        nombre: 'Florencia Martinez',
        nota: 10
    }, 
    {
        nombre: 'Raul Sanchez',
        nota: 7
    }, 
    {
        nombre: 'Sandra Figueroa',
        nota: 8
    }
];

function aprobados(){
    let arr =[];
    let aprobados = document.querySelector(".aprobados");
    alumnos.find((n)=>{
        if(n.nota>=7 === true){
            arr.push(n)
        }        
    })
    arr.forEach((e)=>{
        const p = document.createElement("p"); 
        p.style.color="grey"
        p.innerHTML = `${e.nombre}, Nota: ${e.nota}`;        
        aprobados.appendChild(p);        
    })
}
aprobados()