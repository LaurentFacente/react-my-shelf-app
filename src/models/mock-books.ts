import Book from './book';
   
export const BOOKS: Book[] = [
 {
  id: 1,
  name: "Harry Potter à l'école des sorciers (1997)",
  cover: "https://res.cloudinary.com/the-harry-potter-database/image/upload/c_fill,h_390,w_300/v1590237799/Harry_Potter_1_-_Harry_Potter_and_the_Sorcerers_Stone_-_Mary_Grandpre_blzhwd.jpg",
  types: ["Roman", "Fanstastique"],
  author: "J.K. Rowling",

  created: new Date()
 },
 {
  id: 2,
  name: "Harry Potter et la Chambre des secrets (1998)",
  cover: "https://res.cloudinary.com/the-harry-potter-database/image/upload/c_fill,h_390,w_300/v1590237793/Harry_Potter_2_-_Harry_Potter_and_the_Chamber_of_Secrets_-_Grandpre_xnbrby.jpg",
  types: ["Roman", "Fantastique"],
  author: "J.K. Rowling",
  created: new Date()
 },
 {
  id: 3,
  name: "Harry Potter et le Prisonnier d'Azkaban (1999)",
  cover: "https://res.cloudinary.com/the-harry-potter-database/image/upload/c_fill,h_390,w_300/v1590237792/Harry_Potter_3_-_Harry_Potter_and_the_Prisoner_of_Azkaban_-_Mary_Grandpre_x41ufj.jpg",
  types: ["Roman", "Fantastique"],
  author: "J.K. Rowling",
  created: new Date()
 },
 {
  id: 4,
  name: "Harry Potter et la Coupe de feu (2000)",
  cover: "https://res.cloudinary.com/the-harry-potter-database/image/upload/c_fill,h_390,w_300/v1590237797/Harry_Potter_4_-_Harry_Potter_and_the_Goblet_of_Fire_-_Mary_Grandpre_dvcyl1.jpg",
  types: ["Roman", "Fantastique"],
  author: "J.K. Rowling",
  created: new Date()
 },
 {
  id: 5,
  name: "Harry Potter et l'Ordre du Phénix (2003)",
  cover: "https://res.cloudinary.com/the-harry-potter-database/image/upload/c_fill,h_390,w_300/v1590237794/Harry_Potter_5_-_Harry_Potter_and_the_Order_of_the_Phoenix_-_Mary_Grandpre_lpesll.jpg",
  types: ["Roman", "Fantastique"],
  author: "J.K. Rowling",
  created: new Date()
 },
 {
  id: 6,
  name: "Harry Potter et le Prince de sang-mêlé (2005)",
  cover: "https://res.cloudinary.com/the-harry-potter-database/image/upload/c_fill,h_390,w_300/v1590237787/Harry_Potter_6_-_Harry_Potter_and_the_Half-Blood_Prince_-_Mary_Grandpre_us5er1.jpg",
  types: ["Roman", "Fantastique"],
  author: "J.K. Rowling",
  created: new Date()
 },
 {
  id: 7,
  name: "Harry Potter et les Reliques de la Mort (2007)",
  cover: "https://res.cloudinary.com/the-harry-potter-database/image/upload/c_fill,h_390,w_300/v1590237800/Harry_Potter_7_-_Harry_Potter_and_the_Deathly_Hallows_-_Mary_Grandpre_nfqpyd.jpg",
  types: ["Roman", "Fantastique"],
  author: "J.K. Rowling",
  created: new Date()
 },
 
];
  
export default BOOKS;