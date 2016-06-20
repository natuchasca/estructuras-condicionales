// EJERCICIOS ESTRUCTURAS CONDICIONALES
// Quitar comentarios para visualizar uno a uno

/*
//#1 APROVADO O REPROBADO    / OK!
var n1 = prompt("ingrese nota1");
var n2 = prompt("ingrese nota2");
var n3 = prompt("ingrese nota3");

var notas;
notas = (parseInt(n1) + parseInt(n2) + parseInt(n3));
var promedio;
promedio = (notas/3); 
console.log(promedio);

if (isNaN(notas)) {
  alert("Invalido, Igrese nota valida entre 0 - 10");
  console.log("Invalido, Ingrese nota valida entre 0 - 10");
}

if (promedio >= 6) {
  alert("Aprovado");
  console.log("Aprovado");
}
else {
  alert("Reprovado");
  console.log("Reprovado");
}
*/



/*
//#2 NUMERO MAS GRANDE    / OK!
var valor1; 
var valor2;
valor1= Number(prompt('ingrese su  primer numero',''));
valor2= Number(prompt('ingrese su segundo numero',''));

if (valor1 >= valor2) {
  alert("el numero mayor es " + valor1);
  console.log("el numero mayor es " + valor1);
}
else {
  alert("el numero mayor es " + valor2);
  console.log("el numero mayor es " + valor2);
}
*/


/*
//#3 POSITIVO O NEGATIVO    / OK!
var numero;
numero = parseInt (prompt("Ingrese numero"));

if (numero >= 0) {
  alert("el numero es positivo");
  console.log("el numero es positivo");
}
else {
  alert("el numero es negativo");
  console.log("el numero es negativo");
}
*/


/*
//#4 DESCUENTOS
var precio;
precio=prompt("Ingrese precio");
var preciofinal = 0;

if (precio >= 2500) {
  preciodcto = (precio * 0.15);
  preciofinal = (precio - preciodcto); 
  alert("El precio final es " + preciofinal);
  console.log("El precio final es " + preciofinal);
}
else {
  preciodcto = (precio * 0.08);
  preciofinal = (precio - preciodcto); 
  alert("El precio final es " + preciofinal);
  console.log("El precio final es " + preciofinal);
}
*/


/*
//#5 EL MAYOR DE LOS NUMEROS    / OK!    / probar con switch
var valor1; 
var valor2;
var valor3;
valor1 = Number(prompt('ingrese su  primer numero',''));
valor2 = Number(prompt('ingrese su segundo numero',''));
valor3 = Number(prompt('ingrese su tercer numero',''));

//Con if, else if y else
if ((valor1 >= valor2) && (valor1 >= valor3)) {
  alert("el numero mayor es " + valor1);
  console.log("el numero mayor es " + valor1);
}
else if  ((valor2 >= valor1) && (valor2 >= valor3)) {
  alert("el numero mayor es " + valor2);
  console.log("el numero mayor es " + valor2);
}
else {
  alert("el numero mayor es " + valor3);
  console.log("el numero mayor es " + valor3);
}
*/


/*
//#6 PRESUPUESTO BANQUETES    / NOPE
var personas, preciofinal;
personas = prompt("Ingrese cantidad de personas");
preciofinal = 0;

if (personas >= 200) {
  preciofinal = (personas*95);
  alert("el presupuesto total para " + personas + " es " + preciofinal);
  console.log("el presupuesto total para " + personas + " es " + preciofinal);
}
else if (personas <= 300) {
  preciofinal = (personas*85);
  alert("el presupuesto total para " + personas + " es " + preciofinal);
  console.log("el presupuesto total para " + personas + " es " + preciofinal);
}
else if (personas >= 300) {
  preciofinal = (personas*75);
  alert("el presupuesto total para " + personas + " es " + preciofinal);
  console.log("el presupuesto total para " + personas + " es " + preciofinal);
}

/*
switch (personas) {
    case 200:
       Sentencias a ejecutar si la expresión tiene como valor a valor1
       break
    case valor2:
       Sentencias a ejecutar si la expresión tiene como valor a valor2
       break
    case valor3:
       Sentencias a ejecutar si la expresión tiene como valor a valor3
       break
    default:
       Sentencias a ejecutar si el valor no es ninguno de los anteriores
}
*/



//#7 VIAJE ESCOLAR
var alumnos;
alumnos = prompt("Ingrese cantidad de alumnos");




//#8 COMPAÑIA DE AUTOBUSES




//#9 HAMBURGUESAS




//#10 FABRICAS "EL COMETA"



