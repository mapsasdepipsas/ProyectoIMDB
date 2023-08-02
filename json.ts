//////////////////////////// Paso 6: Lectura/Escritura en Fichero
// 3. Actualizar el GIT con una nueva versión de la app
import { Imdb } from "./Imdb";
import { Movie } from "./Movie";
import { Professional } from "./Professional";
//import  fs from "fs";
import * as fs from 'node:fs';

let actor1 = new Professional("Ron Perlman",73, 90, 185, false, "American", 0, "Actor");
let actor2 = new Professional("David Bradley", 81, 75, 180, false, "British", 0, "Actor");
let director1 = new Professional("Guillermo Del Toro", 58, 91, 178, false, "Mexican", 3, "Director");
let writer1 = new Professional("Gris Grimly", 48, 60, 168, false, "American", 0, "Writer");

// Crear instancias de la clase Movie para representar diferentes películas
let mymovie = new Movie("Pinocchio", 2022, "American", "Animación");
mymovie.actors=[actor1, actor2];
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
let actress1 = new Professional("Scarlett Johansson",38, 58, 160, false, "American", 0, "Actress");
let actor3 = new Professional("David Harbour", 48, 90, 185, false, "American", 0, "Actor");
let director2 = new Professional("Cate Shortland", 54, 60, 162, false, "Australian", 0, "Director");
let writer3 = new Professional("Jac Schaeffer", 44, 65, 172, false, "American", 0, "Writer");


let mymovie2 = new Movie("Black Widow", 2021, "American", "Ciencia Ficción");
mymovie2.actors=[actress1,actor3];
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
let actress2 = new Professional("Michelle Yeoh",60, 55, 163, false, "Malaysian", 1, "Actress");
let actor4 = new Professional("Ke Huy Quan", 51, 58, 163, false, "Vietnamese", 1, "Actor");
let director3 = new Professional("Daniel Kwan", 34, 60, 162, false, "American", 1, "Director");
let writer5 = new Professional("Daniel Kwan", 34, 60, 162, false, "American", 1, "Writer");


let mymovie3 = new Movie("Todo a la vez en todas partes", 2022, "American", "Comedia Dramática");

// mymovie3.actors.push(actress2, actor4);
mymovie3.actors=[actress2,actor4];
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
let peliculas: Movie[] = [mymovie,mymovie2,mymovie3];

// Crear una instancia de la clase Imdb utilizando el array de películas
let imdb = new Imdb(peliculas);
// 1. Convertir a un string el objeto Imdb.
// - PISTA: JSON.stringify()
let imdbaString = JSON.stringify(imdb, null, 2); // El segundo argumento (null) es una función de reemplazo opcional. y el tercero (2)es el sangrado son para dar formato legible al JSON.

// 2. Guardar dicho objeto en un fichero JSON con el nombre “imdbBBDD.json”.
// - PISTA: fs.writeFileSync(file, data[, options])
let nombreArchivoJson  = "imdbBBDD.json";
fs.writeFileSync(nombreArchivoJson, imdbaString);
//fs.writeFileSync("imdbBBDD.json", imdbaString);

// 4. Leer el fichero “imdbBBDD.json” y almacenarlo en una instancia de la clase Imdb
// - PISTA: fs.readFileSync(path[, options])
// - PISTA: JSON.parse()
let data = fs.readFileSync(nombreArchivoJson, "utf-8");
let imdbFromJson= JSON.parse(data);


// console.log(imdbaString )



// Crear una nueva instancia de la clase Movie para cada objeto almacenado en imdbFromJson.peliculas
let peliculasFromJson: Movie[] = imdbFromJson.peliculas.map((pelicula: any) => {
    let { title, releaseYear, nacionality, genre, actors, director, writer, language, plataforma, isMCU, mainCharacterName, producer, distributor } = pelicula;
  
    let actorsInstancia = actors.map((actor: any) => new Professional(actor.name, actor.age, actor.weight, actor.height, actor.isRetired, actor.nationality, actor.oscarsNumber, actor.profession));
    let directorInstancia = new Professional(director.name, director.age, director.weight, director.height, director.isRetired, director.nationality, director.oscarsNumber, director.profession);
    let writerInstancia = new Professional(writer.name, writer.age, writer.weight, writer.height, writer.isRetired, writer.nationality, writer.oscarsNumber, writer.profession);
  
    let movie = new Movie(title, releaseYear, nacionality, genre);
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
let imdbCargadas = new Imdb(peliculasFromJson);

// Muestro detalles de las películas almacenadas en el objeto Imdb utilizando el método mostrarMovies()
imdbCargadas.peliculas.forEach((pelicula, index) => {
  console.log(`Detalles de la Película ${index + 1}`);
  console.log(pelicula.mostrarMovies());
});
  

// Creo una nueva instancia de la clase Movie para cada objeto almacenado en imdbFromJson.peliculas


//  imdbFromJson.forEach((pelicula,index) => {
//      console.log(`Detalles de la Película ${index + 1}`);
//     console.log(pelicula.mostrarMovies());
//   });

//   console.log(imdbFromJson.peliculas);