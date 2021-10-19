// definicion de variables

let profundidadNoValida = Boolean(true);
let tiempoNoValido = Boolean(true);
let otroBuceoValido = Boolean(true);
let buceoRepetitivo = Boolean(true);
let tiempoDeTabla = 0;
let buceoCont = 1;

// definicion de constantes

const buceo = new Buceo(0,0, 0, 0, 0,"A");
const buceoMezcla = new BuceoMezcla(0, 0);
const inputProfundidadHTML = document.getElementById("inputProfundidad");
const inputTiempoHTML = document.getElementById("inputTiempo");
const inputIntervaloHTML = document.getElementById("inputIntervalo");
const selectBuceoHTML = document.getElementById("selectBuceo");
const buttonDiveLog = document.getElementById("DiveLog");
const buttonLimpiar = document.getElementById("Limpiar");
const buttonBotonFuera = document.getElementById("botonFuera");

// const selectorFila = document.getElementById("tablaBuceos");
// definicion de arrays

const profAire = [3, 4.5, 6, 7.5, 9, 10.5, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39];
const noDeco = [245, 217, 205, 166, 145, 131, 108, 63, 45, 37, 28, 24, 18, 16, 10, 6];
const grupo = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];
const profNoDeco = [];
const noDecoGrupo = [];
const buceosArray = [];
const deco ={ 
245:[57, 101, 158, 245],
217:[36, 60, 88, 121, 163, 217],
205:[26, 43, 61, 82, 106, 133, 165, 205],
166:[20, 33, 47, 62, 78, 97, 117, 140, 166],
145:[17, 27, 38, 50, 62, 46, 91, 107, 125, 145],
131:[14, 23, 32, 42, 52, 63, 74, 87, 100, 115, 131],
108:[12, 20, 27, 36, 44, 53, 63, 73, 84, 95, 108],
63:[9, 15, 21, 28, 34, 41, 48, 56, 63],
45:[7, 12, 17, 22, 28, 33, 39, 45],
37:[6, 10, 14, 19, 23, 28, 32, 37],
28:[5, 9, 12, 16, 20, 24, 28],
24:[4, 7, 11, 14, 17, 21, 24],
18:[4, 6, 9, 12, 15, 18],
16:[3, 6, 8, 11, 14, 16],
10:[3, 5, 7, 10],
6:[2, 4, 6]
}


// onload DOM functions

$(document).ready(cargaDOM())
limpioLS();
deshabilitoTiempo();
$("#DiveLog").hide()
$("#Simular").hide()
mezclaDeco(1);



/* Event listeners */

inputProfundidadHTML.addEventListener('blur', inputProfundidadDejaFoco,true);
inputProfundidadHTML.addEventListener('focus', inputProfundidadFoco,true);

inputTiempoHTML.addEventListener('blur', inputTiempoDejaFoco,true);
inputTiempoHTML.addEventListener('focus', inputTiempoFoco,true);

// inputIntervaloHTML.addEventListener('blur', inputTiempoDejaFoco,true);
inputIntervaloHTML.addEventListener('focus', inputCorreoFoco,true);
selectBuceoHTML.addEventListener('focus',selectBuceoFocus,true )

buttonDiveLog.addEventListener("click", buceoDiveLog);
buttonLimpiar.addEventListener("click", botonLimpiar);
buttonBotonFuera.addEventListener("click",botonEnviar);

// selectorFila.addEventListener("click",selectorDeFila);
