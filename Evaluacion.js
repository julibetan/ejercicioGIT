//ejercicio 1

var numero1 = 5;
var numero2 = 8;
var numero1Incrementado = numero1+1;

if(numero1 < numero2) {
console.log("numero1 no es mayor que numero2");
}

if(numero2 > 0) {
console.log("numero2 es positivo");
}

if(numero1 < 0 || numero1!=0 ) {
console.log("numero1 es negativo o distinto de cero");
}

if(numero1Incrementado <= numero2) {
console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}

//ejercicio 2

factorial = 5;
let temporal = 1;

for(let i=1; i<= factorial; i++){
    temporal*=i;
}

console.log(temporal);

//ejercicio 3

var numero = 5;
 
function esParImpar(numero) {
  if(numero % 2 == 0) {
    return "par";
  }
  else {
    return "impar";
  }
}

console.log("El valor del numero es: "+esParImpar(numero));

//ejercicio 4

var cadena="casa"

function limpiarCadena(cadena){

    cadena=cadena.toLowerCase();
    cadena=cadena.split("");
    cadenaAlreves=cadena.reverse();

    for (var i=0;i<cadena.length();i++) {
        if (cadena[i] != cadenaAlreves[a]) {
            flag = false;
            break;
        };
        a--;
    };
    if (flag) {
        return("La cadena es un palíndromo.");
    }
    else {
        return("La cadena NO es un palíndromo.");
    }
    };

    var resultado = limpiarCadena(cadena);
    console.log(resultado);


//ejercicio 5

class Persona {
    nombre;
    edad
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    obtDetalles(){
        console.log('Mi nombre es: '+this.nombre+'y tengo '+this.edad+' años de edad');
    }
}

class Estudiante extends Persona{
    calificacion;
    constructor(nombre, edad) {
        super(nombre, edad);
        //this.calificacion = calificacion;
    }

    obtDetalles(){
        console.log('Mi nombre es: '+this.nombre+'y tengo '+this.edad+' años de edad. Y mi calificacion es: '+this.calificacion);
    }
}

class Profesor extends Persona{
    asignatura;
    nivel;
    constructor(nombre, edad, asignatura="js",nivel="basico") {
        super(nombre, edad);
        this.asignatura = asignatura;
        this.nivel = nivel;
    }

    obtDetalles(){
        console.log('Mi nombre es: '+this.nombre+'y tengo '+this.edad+' años de edad. Y mi asignatura es: '+this.asignatura+" y mi nivel es: "+this.nivel);
    }
}

class Grupo{
    profesor;
    promedio;
    estudiantes=[];

    constructor(profesor, estudiantes) {
        this.profesor = profesor;
        for (let j = 0; j < estudiantes.length; j++) {
            this.estudiantes.push(estudiantes[j]);
        }
    }

    calificar(){
        for (let j = 0; j < estudiantes.length; j++) {
            estudiantes[j].promedio=(Math.random() * 10);
        }
    }

    calcularPromedio(){
        for (let j = 0; j < estudiantes.length; j++) {
            valorPromedio=estudiantes[j].promedio++;
        }
        valorPromedio/=estudiantes.length
    }

    obtDetalles(){
        console.log('El profesor es: '+this.profesor+'y los estudiantes: '+this.estudiantes);
    }
}


const estudiantes=new Estudiante(["juan","pedro","sara","pedru","saru","fede"], [2,2,22,2,2,22]);
const profe = new Profesor("Juan", "23");
const grupo = new Grupo("jprofe", estudiantes);

const grupo1 = new Grupo("jprofe", ["juan","pedro","sara"]);


console.log(estudiantes.obtDetalles);
console.log(estudiantes);
//console.log(estud.calificar());

//Bonus

