"use strict";
//         Paso 5: Clase Imdb
// 1. Crear una clase denominada Imdb cuyo constructor reciba un array de objetos de la clase Movie
// 2. Debe tener un único atributo publico denominado películas que es un array de objetos de la clase Movie
// 3. Crear un fichero testImdb para probar esta clase creando un objeto de tipo Imdb.
// 4. Actualizar GIT con una nueva versión de la app.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Imdb = void 0;
var fs = require("node:fs");
var Imdb = /** @class */ (function () {
    function Imdb(peliculas) {
        this.peliculas = peliculas;
    }
    //Paso 7: Añadir nuevos métodos a la clase
    // Crear los siguientes métodos público en la clase Imdb:
    // - escribirEnFicheroJSON(nombreFichero: string)
    Imdb.prototype.escribirEnFicheroJSON = function (Fichero) {
        var imdbaString = JSON.stringify(this, null, 2);
        fs.writeFileSync(Fichero, imdbaString);
        console.log("Guardado en ".concat(Fichero));
    };
    // Toma el nombre de un fichero como parámetro de entrada y genera un fichero .json con
    // toda la información guardada en el objeto Imdb.
    // - obtenerInstanciaIMDB(nombreFichero:string):Imdb
    // Devuelve un objeto de la clase Imdb creado a partir del fichero.
    Imdb.prototype.obtenerInstanciaIMDB = function (Fichero) {
        var data = fs.readFileSync(Fichero, "utf8");
        var imdbFromJson = JSON.parse(data);
        return new Imdb(imdbFromJson.peliculas);
    };
    return Imdb;
}());
exports.Imdb = Imdb;
