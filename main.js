// Exercise #1
// Create an object to hold information on your favorite recipe.
//It should have properties for *title* (a string), *servings*(a number)
// and *ingredients*(an array of strings)
// On separate lines (one console.log statement for each), log the 
//recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa
 
let favoriteRecipe = {
  title : 'Mole',
  serves : 2,
  ingredients : ['cinnamon','cumin','cocoa']
}

console.log(favoriteRecipe.title)
console.log(favoriteRecipe.serves)
console.log(`${favoriteRecipe.ingredients}`)



//Exercise #2
// Create an array of objects, where each object describes
// a book and has properties for the *title*(a string), *author*(a string)
// and *alreadyRead* (a boolean indicating if you read it yet)
// Iterate through the array of objects of books. For each book, log the book title and book
// author like so: "1984 by George Orwell"
// Now use an if/else statement to change the output depending on whether you read it
// or not. If you read it, log a string like "You already read "1984" by George Orwell"
// and vice versa

let books = [{title: '1984' , author: 'George Orwell', value: true},{title: 'Death By the Bay' , author: 'Patrica Skalka', value: false},{title: 'Beast' , author: 'Donna Jo Napoli ', value: false}];
//let read = 2
for (i = 0; i < books.length; i++){
  
  if(books[i].value === true){
    console.log(`YOu already read ${books[i].title} by ${books[i].author}`)
  }else{
    console.log(`You have not read any of the books`)
  }

}  

//Exercise #3
//Create your object representing your favorite movie, like so
// const shawshank = {
//   title: 'Shawshank Redemption',
//   director: 'Frank Darabont',
//   actors: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
//   releaseYear: 1994, 
//   duration: 142
// }
// After you have crreated your movie object, print the title 
// of your movie using dot notation
// Print the director's name
// Print the release year
// Maybe your favorite came with an extended cut, including deleted scenes. 
// Write a statement that increases your movie object's duration by 30 minutes. 

let shawshank = {
  title: 'Shawshank Redemption',
  director: 'Frank Darabont',
  actors: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
  releaseYear: 1994, 
  duration: 142
}
let exraTime = shawshank.duration + 30
console.log(`Title : ${shawshank.title}`)
console.log(`director: ${shawshank.director}`)
//console.log(`actors: ${shawshank.actors}`)
console.log(`releaseYear: ${shawshank.releaseYear}`)
console.log(`duration: ${exraTime}`)





//Exercise #4 
//using the array provided below, 
// How do you check if an object is an array or not? 
// You are checking if arrayList is an array, assuming it were an object before testing it
// That it is not an object
let arrayList = [1,2,3] ;
  
function checkForArray (group){

let stem = Array.isArray(group)

if ( typeof group === 'object' && stem != true){
 console.log(`${group} is an objects`)
}else if( stem === true){
  console.log(`${group} is an array not an object`)
}else{
  console.log(`you messed up`)
}
}
checkForArray(arrayList)

//Exercise #5
// Write a function countCharacters that, when given a string as an argument,
// returns an object containing counts of the ocurrences of each character in 
// the string
// function countCharacters(){
// 
//  }
// countCharacters("hello"); => {"h": 1, "e": 1, "l": 2, "o": 1}


//Exercise #6
// Write a function that accepts two objects
// as arguments and 
// *extends* all of the key/value pairs of the second one to the first one
// function extend(obj1, obj2) {
  
// }
// extend({a: 1, c: 3}, {b: 2, c: 4}) => {a: 1, b:2, c:4}

object1 = {
  a: 1,
  b: 2,
  c: 3
};

object2 = {
  c: 4,
  d: 5,
  e: 6
};