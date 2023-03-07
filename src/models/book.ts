export default class Book {
    // 1. Typage des propiétés d'un livre.
    id: number;
    name: string;
    cover: string;
    types: Array<string>; 
    author: string;
    created: Date;
     
    // 2. Définition des valeurs par défaut des propriétés d'un livre.
    constructor(
     id: number,
     name: string = 'name',
     cover: string = 'http://...',
     types: Array<string> = ['Normal'],
     author: string = 'name',
     created: Date = new Date()
    ) {
     // 3. Initialisation des propiétés d'un livres.
     this.id = id;
     this.name = name;
     this.cover = cover;
     this.types = types;
     this.author = author;
     this.created = created;
    }
   }