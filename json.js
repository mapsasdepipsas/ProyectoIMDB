"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//////////////////////////// Paso 6: Lectura/Escritura en Fichero
// 3. Actualizar el GIT con una nueva versión de la app
var Imdb_1 = require("./Imdb");
var Movie_1 = require("./Movie");
var Professional_1 = require("./Professional");
//import  fs from "fs";
var fs = require("node:fs");
var actor1 = new Professional_1.Professional("Ron Perlman", 73, 90, 185, false, "American", 0, "Actor");
var actor2 = new Professional_1.Professional("David Bradley", 81, 75, 180, false, "British", 0, "Actor");
var director1 = new Professional_1.Professional("Guillermo Del Toro", 58, 91, 178, false, "Mexican", 3, "Director");
var writer1 = new Professional_1.Professional("Gris Grimly", 48, 60, 168, false, "American", 0, "Writer");
// Crear instancias de la clase Movie para representar diferentes películas
var mymovie = new Movie_1.Movie("Pinocchio", 2022, "American", "Animación");
mymovie.actors = [actor1, actor2];
//mymovie.actors.push(actor1, actor2);
mymovie.director = director1;
mymovie.writer = writer1;
mymovie.language = "English";
mymovie.isMCU = false;
mymovie.mainCharacterName = "Gregory Mann";
mymovie.producer = "Alexander Bulkley";
mymovie.distributor = "TriPictures";
mymovie.plataforma = "Netflix";
//Datos de la Segunda Película//
var actress1 = new Professional_1.Professional("Scarlett Johansson", 38, 58, 160, false, "American", 0, "Actress");
var actor3 = new Professional_1.Professional("David Harbour", 48, 90, 185, false, "American", 0, "Actor");
var director2 = new Professional_1.Professional("Cate Shortland", 54, 60, 162, false, "Australian", 0, "Director");
var writer3 = new Professional_1.Professional("Jac Schaeffer", 44, 65, 172, false, "American", 0, "Writer");
var mymovie2 = new Movie_1.Movie("Black Widow", 2021, "American", "Ciencia Ficción");
mymovie2.actors = [actress1, actor3];
//mymovie2.actors.push(actress1, actor3);
mymovie2.director = director2;
mymovie2.writer = writer3;
mymovie2.language = "English";
mymovie2.isMCU = true;
mymovie2.mainCharacterName = "Scarlett Johansson";
mymovie2.producer = "Kevin Feige";
mymovie2.distributor = "Walt Disney Studios Motion Pictures";
mymovie2.plataforma = "Disney+";
//mymovie2.mostrarMovies();
//Datos de la Tercera Película//
var actress2 = new Professional_1.Professional("Michelle Yeoh", 60, 55, 163, false, "Malaysian", 1, "Actress");
var actor4 = new Professional_1.Professional("Ke Huy Quan", 51, 58, 163, false, "Vietnamese", 1, "Actor");
var director3 = new Professional_1.Professional("Daniel Kwan", 34, 60, 162, false, "American", 1, "Director");
var writer5 = new Professional_1.Professional("Daniel Kwan", 34, 60, 162, false, "American", 1, "Writer");
var mymovie3 = new Movie_1.Movie("Todo a la vez en todas partes", 2022, "American", "Comedia Dramática");
// mymovie3.actors.push(actress2, actor4);
mymovie3.actors = [actress2, actor4];
mymovie3.director = director3;
mymovie3.writer = writer5;
mymovie3.language = "English";
mymovie3.isMCU = false;
mymovie3.mainCharacterName = "Michelle Yeoh";
mymovie3.producer = "Anthony y Joe Russo";
mymovie3.distributor = "YouPlanet Pictures";
mymovie3.plataforma = "Movistar+";
//mymovie3.mostrarMovies();
// Crear un array con todas las instancias de películas creadas
var peliculas = [mymovie, mymovie2, mymovie3];
// Crear una instancia de la clase Imdb utilizando el array de películas
var imdb = new Imdb_1.Imdb(peliculas);
// 1. Convertir a un string el objeto Imdb.
// - PISTA: JSON.stringify()
var imdbaString = JSON.stringify(imdb, null, 2); // El segundo argumento (null) es una función de reemplazo opcional. y el tercero (2)es el sangrado son para dar formato legible al JSON.
// 2. Guardar dicho objeto en un fichero JSON con el nombre “imdbBBDD.json”.
// - PISTA: fs.writeFileSync(file, data[, options])
var nombreArchivoJson = "imdbBBDD.json";
fs.writeFileSync(nombreArchivoJson, imdbaString);
//fs.writeFileSync("imdbBBDD.json", imdbaString);
// 4. Leer el fichero “imdbBBDD.json” y almacenarlo en una instancia de la clase Imdb
// - PISTA: fs.readFileSync(path[, options])
// - PISTA: JSON.parse()
var data = fs.readFileSync(nombreArchivoJson, "utf-8");
var imdbFromJson = JSON.parse(data);
// console.log(imdbaString )
// Crear una nueva instancia de la clase Movie para cada objeto almacenado en imdbFromJson.peliculas
var peliculasFromJson = imdbFromJson.peliculas.map(function (pelicula) {
    var title = pelicula.title, releaseYear = pelicula.releaseYear, nacionality = pelicula.nacionality, genre = pelicula.genre, actors = pelicula.actors, director = pelicula.director, writer = pelicula.writer, language = pelicula.language, plataforma = pelicula.plataforma, isMCU = pelicula.isMCU, mainCharacterName = pelicula.mainCharacterName, producer = pelicula.producer, distributor = pelicula.distributor;
    var actorsInstancia = actors.map(function (actor) { return new Professional_1.Professional(actor.name, actor.age, actor.weight, actor.height, actor.isRetired, actor.nationality, actor.oscarsNumber, actor.profession); });
    var directorInstancia = new Professional_1.Professional(director.name, director.age, director.weight, director.height, director.isRetired, director.nationality, director.oscarsNumber, director.profession);
    var writerInstancia = new Professional_1.Professional(writer.name, writer.age, writer.weight, writer.height, writer.isRetired, writer.nationality, writer.oscarsNumber, writer.profession);
    var movie = new Movie_1.Movie(title, releaseYear, nacionality, genre);
    movie.actors = actorsInstancia;
    movie.director = directorInstancia;
    movie.writer = writerInstancia;
    movie.language = language;
    movie.plataforma = plataforma;
    movie.isMCU = isMCU;
    movie.mainCharacterName = mainCharacterName;
    movie.producer = producer;
    movie.distributor = distributor;
    return movie;
});
// Creo una nueva instancia de la clase Imdb utilizando las películas cargadas desde el archivo JSON
var imdbCargadas = new Imdb_1.Imdb(peliculasFromJson);
// Muestro detalles de las películas almacenadas en el objeto Imdb utilizando el método mostrarMovies()
imdbCargadas.peliculas.forEach(function (pelicula, index) {
    console.log("Detalles de la Pel\u00EDcula ".concat(index + 1));
    console.log(pelicula.mostrarMovies());
});
// Creo una nueva instancia de la clase Movie para cada objeto almacenado en imdbFromJson.peliculas
//  imdbFromJson.forEach((pelicula,index) => {
//      console.log(`Detalles de la Película ${index + 1}`);
//     console.log(pelicula.mostrarMovies());
//   });
//   console.log(imdbFromJson.peliculas);
