"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var Imdb_1 = require("./Imdb");
var Professional_1 = require("./Professional");
//import { Movie } from './Movie';
// Carga la información del archivo "imdbBBDD.json"
var data = require('./imdbBBDD.json');
var peliculas = data.peliculas;
// Crea una instancia de la clase Imdb con los datos cargados
var imdb = new Imdb_1.Imdb(peliculas);
// Función para solicitar por pantalla los datos del nuevo profesional
function obtener() {
    var nombre = readlineSync.question('Nombre del profesional: ');
    var edad = readlineSync.questionInt('Edad: ');
    var peso = readlineSync.questionFloat('Peso: ');
    var altura = readlineSync.questionFloat('Altura: ');
    var esRetiradoString = readlineSync.question('Retirado (true/false): ');
    var esRetirado = JSON.parse(esRetiradoString.toLowerCase());
    var nacionalidad = readlineSync.question('Nacionalidad: ');
    var numOscars = readlineSync.questionInt('Oscars: ');
    var profesion = readlineSync.question('Profesion: ');
    return new Professional_1.Professional(nombre, edad, peso, altura, esRetirado, nacionalidad, numOscars, profesion);
}
// Solicita por pantalla el índice de la película a la que se agregará el nuevo profesional
var indiceMovie = readlineSync.questionInt('Ingrese indice pelicula que desea agregar un profesional: ');
if (indiceMovie >= 0 && indiceMovie < peliculas.length) {
    // Obtiene los datos del nuevo profesional
    var nuevoProfesional = obtener();
    // Agrega el nuevo profesional a la película seleccionada
    //del json.ts let peliculas: Movie[] = [mymovie,mymovie2,mymovie3];
    // Desestructuramos con llaves {} para extraer las propiedades de actors de la clase Professional.
    var actors = peliculas[indiceMovie].actors;
    // Agrega el nuevo profesional al arreglo de actores
    actors.push(nuevoProfesional);
    // Guarda la información actualizada en el archivo "imdbBBDD.json"
    imdb.escribirEnFicheroJSON('./imdbBBDD.json');
    console.log('Nuevo profesional agregado');
}
else {
    console.log('No se ha validado índice de la película, vuelva a intentarlo');
}
