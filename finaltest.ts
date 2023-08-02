import * as readlineSync from 'readline-sync';
import { Imdb } from './Imdb';
import { Professional } from './Professional';
//import { Movie } from './Movie';

// Carga la información del archivo "imdbBBDD.json"
let data = require('./imdbBBDD.json');
let peliculas = data.peliculas;

// Crea una instancia de la clase Imdb con los datos cargados
let imdb = new Imdb(peliculas);

// Función para solicitar por pantalla los datos del nuevo profesional
function obtener(): Professional {
    let nombre = readlineSync.question('Nombre del profesional: ');
    let edad = readlineSync.questionInt('Edad: ');
    let peso = readlineSync.questionFloat('Peso: ');
    let altura = readlineSync.questionFloat('Altura: ');
    let esRetiradoString = readlineSync.question('Retirado (true/false): ');
    let esRetirado = JSON.parse(esRetiradoString.toLowerCase());
    let nacionalidad = readlineSync.question('Nacionalidad: ');
    let numOscars = readlineSync.questionInt('Oscars: ');
    let profesion = readlineSync.question('Profesion: ');
    
    return new Professional(
        nombre,
        edad,
        peso,
        altura,
        esRetirado,
        nacionalidad,
        numOscars,
        profesion,
    );
}

// Solicita por pantalla el índice de la película a la que se agregará el nuevo profesional
let indiceMovie = readlineSync.questionInt('Ingrese indice pelicula que desea agregar un profesional: ');

if (indiceMovie >= 0 && indiceMovie < peliculas.length) {
    // Obtiene los datos del nuevo profesional
    let nuevoProfesional = obtener();
    
    // Agrega el nuevo profesional a la película seleccionada
    //del json.ts let peliculas: Movie[] = [mymovie,mymovie2,mymovie3];
    
    
    // Desestructuramos con llaves {} para extraer las propiedades de actors de la clase Professional.
    let { actors } = peliculas[indiceMovie];

    // Agrega el nuevo profesional al arreglo de actores
    actors.push(nuevoProfesional);

    // Guarda la información actualizada en el archivo "imdbBBDD.json"
    imdb.escribirEnFicheroJSON('./imdbBBDD.json');
    console.log('Nuevo profesional agregado');
} else {
    console.log('No se ha validado índice de la película, vuelva a intentarlo');
}
