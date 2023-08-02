//Paso 1: Clase Professional

// 1. El objetivo de este proyecto final es crear una BBDD de películas y guardar todo ello en un
// fichero en formato .json.

// 2. Crear un proyecto en GIT llamado IMDB para que contenga todos los ficheros del proyecto y
// compartirlo con todos los desarrolladores del equipo.

// 3. Crear una clase denominada Professional con los siguientes atributos públicos:
// - name: string
// - age: number
// - weight: number
// - height: number
// - isRetired: boolean
// - nationality: string
// - oscarsNumber: number
// - profession: string

// 4. Esta clase debe tener un constructor que incluirá en sus parámetros TODOS estos atributos

// 5. Esta clase tendrá un MÉTODO PUBLICO que muestre en consola el valor de TODOS sus atributos

export class Professional{
    public name: string;
    public age: number;
    public weight: number;
    public height: number;
    public isRetired: boolean;
    public nationality: string;
    public oscarsNumber: number;
    public profession: string;
        
        constructor(name:string,age:number,weight:number,height:number,isRetired:boolean,nationality:string,oscarsNumber:number,profession:string){
            this.name =name;
            this.age  = age;
            this.weight =weight;
            this.height =height;
            this.isRetired =isRetired;
            this.nationality=nationality;
            this.oscarsNumber=oscarsNumber;
            this.profession=profession;
        }

        public mostrar():string {
            
            return `
            Name:${this.name},
            Age: ${this.age},
            Weight: ${this.weight},
            Height: ${this.height},
            Is Retired: ${this.isRetired},
            Nationality: ${this.nationality},
            Oscars Number: ${this.oscarsNumber},
            Profession: ${this.profession}`
            
          }
}