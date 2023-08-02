"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Imdb_1 = require("./Imdb");
var Movie_1 = require("./Movie");
var Professional_1 = require("./Professional");
//import { readFileSync, writeFileSync } from "fs";
//console.log(imdb.peliculas);
//////// Crear instancias de la clase Professional
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
// // Mostrar los detalles de las películas almacenadas en el objeto Imdb utilizando el método mostrarMovies()
imdb.peliculas.forEach(function (pelicula, index) {
    console.log("Detalles de la Pel\u00EDcula ".concat(index + 1, ",\n").concat(pelicula.mostrarMovies()));
});
