const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 9 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 2 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 6 },
  { title: 'Les frères Karamazov', id: 450911, rented: 5 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

for(i = 0; i < books.length; i++){
  if(books[i].rented > 0) {
    console.log(`Ce livre a été empreinté ${books[i].rented} fois.`)
    console.log(books[i].title)
  } else {
    console.log("Ce livre n'a jamais été empreinté.")
    console.log(books[i].title)
  }
}


console.log("**********************************")
console.log("Voici le livre le plus emprunté :")
let mostRented = books.sort(function(a, b) {
  var textA = a.rented;
  var textB = b.rented;
  return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
});

console.log(mostRented[Object.keys(mostRented)[Object.keys(mostRented).length - 1]]);

for(i = 0; i < books.length; i++) {
  if(books[i].id === 873495) {
    console.log(`Voici le livre avec l'id '873495' => ${books[i].title}`)
  }
}

for(i = 0; i < books.length; i++) {
  if(books[i].id === 133712 ){
    console.log(`${books[i]} a été supprimé`);
    delete books[i];
  }
}
console.log("Voici la liste des livres après suppression :")
console.log(books);
console.log("**********************")


console.log("**********************************")
console.log("Voici les livres triés alphabetiquement :")
let orderAlphabeticaly = books.sort(function(a, b) {
  var textA = a.title;
  var textB = b.title;
  return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
});
console.log(orderAlphabeticaly)