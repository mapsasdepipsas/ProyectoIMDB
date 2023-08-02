// Paso 2: Fichero testProfessional.ts

// 1. Crear un archivo testProfessional.ts con varios objetos de la clase Professional y mostrar
// todos sus atributos usando el método anterior.

// 2. Actualizar el GIT con esta nueva versión de la app

// 3. No olvidad que los ficheros .js deben estar en el .gitignore.

import { Professional } from "./Professional";
let actor1 = new Professional("Ron Perlman",73, 90, 185, false, "American", 0, "Actor");
let actor2 = new Professional("David Bradley", 81, 75, 180, false, "British", 0, "Actor");
let director1 = new Professional("Guillermo Del Toro", 58, 91, 178, false, "Mexican", 3, "Director");
let writer1 = new Professional("Gris Grimly", 48, 60, 168, false, "American", 0, "Writer");

console.log(actor1.mostrar());
console.log(actor2.mostrar());
console.log(director1.mostrar());
console.log(writer1.mostrar());