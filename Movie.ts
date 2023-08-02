//Paso 3: Clase Movie

// 1. Crear una clase que se llame Movie con los siguientes atributos Públicos.
// - title: string
// - releaseYear: number
// - actors: Professional[]
// - nacionality: string
// - director: Professional
// - writer: Professional
// - language: string
// - plataforma: string
// - isMCU: boolean
// - mainCharacterName: string
// - producer: string
// - distributor: string
// - genre: string

// 2. Los únicos parámetros del constructor son: title, releaseYear, nacionality y genre

// 3. Crear un método PUBLICO que muestre todos los datos de las peliculas
import { Professional } from "./Professional";
export class Movie{
    public title: string;
    public releaseYear: number;
    public actors: Professional[]=[];
    public nacionality: string;
    public director: Professional;
    public writer: Professional;
    public language: string;
    public plataforma: string;
    public isMCU: boolean;
    public mainCharacterName: string;
    public producer: string;
    public distributor: string;
    public genre: string;

    constructor(title:string,releaseYear:number,nacionality:string,genre:string){
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
        this.actors = [];
        this.director = new Professional("Guillermo Del Toro", 58, 91, 178, false, "Mexican", 3, "Director");
        this.writer = new Professional("Gris Grimly", 48, 60, 168, false, "American", 0, "Writer");
        this.language = "";
        this.plataforma = "";
        this.isMCU = false;
        this.mainCharacterName = "";
        this.producer = "";
        this.distributor = "";
    }
        public mostrarMovies():string{
            let listActors = "";
            this.actors.forEach(actor => {
                listActors  += `--> ${actor.mostrar()}\n`;
            });
            return `----------------------------------------------
              Title: ${this.title},
              Release Year: ${this.releaseYear},
              Actors:${listActors},
              Nacionality: ${this.nacionality},
              Director: ${this.director.mostrar()},
              Writer:${this.writer.mostrar()},
              Language: ${this.language},
              Plataforma: ${this.plataforma},
              Is MCU: ${this.isMCU},
              Main Character Name: ${this.mainCharacterName},
              Producer: ${this.producer},
              Distributor: ${this.distributor},
              Genre: ${this.genre}`
          }
        }