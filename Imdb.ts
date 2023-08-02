//         Paso 5: Clase Imdb
// 1. Crear una clase denominada Imdb cuyo constructor reciba un array de objetos de la clase Movie
// 2. Debe tener un único atributo publico denominado películas que es un array de objetos de la clase Movie
// 3. Crear un fichero testImdb para probar esta clase creando un objeto de tipo Imdb.
// 4. Actualizar GIT con una nueva versión de la app.

import { Movie } from "./Movie";
import * as fs from 'node:fs';
export class Imdb {
    public peliculas: Movie[];
  
    constructor(peliculas: Movie[]) {
      this.peliculas = peliculas;
    }

    //Paso 7: Añadir nuevos métodos a la clase
    // Crear los siguientes métodos público en la clase Imdb:
    // - escribirEnFicheroJSON(nombreFichero: string)
    public escribirEnFicheroJSON(Fichero: string): void{
      let imdbaString = JSON.stringify(this, null, 2);
      fs.writeFileSync(Fichero, imdbaString);
      console.log(`Guardado en ${Fichero}`);
    
    }
    // Toma el nombre de un fichero como parámetro de entrada y genera un fichero .json con
    // toda la información guardada en el objeto Imdb.
    // - obtenerInstanciaIMDB(nombreFichero:string):Imdb
    // Devuelve un objeto de la clase Imdb creado a partir del fichero.

    public obtenerInstanciaIMDB(Fichero: string): Imdb{

    let data = fs.readFileSync(Fichero, "utf8");
    let imdbFromJson= JSON.parse(data);
    return new Imdb(imdbFromJson.peliculas);
  }}
  
