// // Exemplu de utilizare a instrucțiunii switch
// function getDayType(day) {
//   switch (day) {
//     case 'Luni':
//     case 'Marti':
//     case 'Miercuri':
//     case 'Joi':
//     case 'Vineri':
//       return 'Zi lucrătoare';

//     case 'Sambata':
//     case 'Duminica':
//       return 'Weekend';

//     default:
//       return 'Zi invalidă';
//   }
// }
// console.log(getDayType('Luni')); // Zi lucrătoare
// console.log(getDayType('Sambata'));
// // metoda ternară
// let total = 500;
// let shipping = total > 500 ? 'Livrare gratuită' : 'Cost de livrare: 50 lei';
// console.log(shipping); // Livrare gratuită
// // metoda ternară pentru verificarea vârstei
// function checkAge(age) {
//   return age >= 18 ? 'Ești major' : 'Ești minor';
// }
// console.log(checkAge(20)); // Ești major
// console.log(checkAge(16)); // Ești minor
// // Array methods
// const marime = ['S', 'M', 'L', 'XL'];
// marime[0] = 'XS'; // Modificăm primul element
// console.log(marime); // ["XS", "M", "L", "XL"]
// marime.push('XXL'); // Adăugăm un element la sfârșitul array-ului
// console.log(marime); // ["XS", "M", "L", "XL", "XXL"]
// console.log(marime.length); // 5 // Afișăm lungimea array-ului
// console.log(marime.toString()); // "XS,M,L,XL,XXL" // Convertim array-ul în string

// // sortarea array-ului
// function sortArray(a, b) {
//   return a - b; // sortare crescătoare
// }
// let numbers = [5, 2, 9, 1, 5, 6];
// numbers.sort(sortArray);
// console.log(numbers); // [1, 2, 5, 5, 6, 9]

// function printArray2(a, b) {
//   return a + b; // sortare descrescătoare
// }
// let numbers2 = [5, 2, 9, 1, 5, 6];
// numbers2.sort(printArray2);
// console.log(numbers2); // [9, 6, 5, 5, 2, 1]

// // Microexercițiu
// let products = ['Dress', 'Shirt', 'T-Shirt', 'Jacket'];
// let prices = [150, 240, 55, 485];

// products.push('Blouse'); // Adăugăm un element la sfârșitul array-ului
// prices.push(401);

// products.unshift('Coat'); // Adăugăm un element la începutul array-ului
// prices.unshift(799);
// console.log(products.length); // 6 // Afișăm lungimea array-ului
// console.log(prices.length); // 6

// products.pop(); // Eliminăm ultimul element
// prices.pop(); // Eliminăm ultimul element

// products.sort(); // Sortăm array-ul de produse
// console.log(products.toString()); // "Coat,Dress,Jacket,Shirt,T-Shirt"
// prices.sort(function (a, b) {
//   return a - b; // Sortare crescătoare
// });
// console.log(prices.toString()); // "55,150,240,485,799"

// let users = [
//   [1, 'john', '04as89v4v', 'john@gmail.com'],
//   [2, 'emma', '7dh9hh4t4', 'emma@gmail.com'],
//   [3, 'ben', '9fghj44858', 'ben@gmail.com'],
//   [4, 'ava', 'dfh57h24gv', 'ava@gmail.com'],
// ];
// for (let i = 0; i < users.length; i++) {
//   console.log(users[i][1]); // Afișăm numele utilizatorilor
// }

// for (let i = 0; i < users.length; i++) {
//   for (let j = 0; j < users[i].length; j++) {
//     console.log(users[i][j]);
//   }
// } // Afișăm toate elementele din array-ul bidimensional

// const product = { id: 101, name: 'Dress', price: 659, currency: 'RON' };
// console.log(product.name + '-' + product.price + product.currency); // Afișăm numele și prețul produsului

let product = {
  id: 3,
  title: 'T-Shirt',
  price: 290,
  inStock: true,
};
function produs(product) {
  if (product.inStock) {
    console.log(
      'Produsul ' +
        product.title +
        ' este în stoc și costă ' +
        product.price +
        ' RON.',
    );
  } else {
    console.log('Produsul ' + product.title + ' nu este în stoc.');
  }
}
produs(product);

let map = new Map();
map.set('id', 1);
map.set('username', 'john');
map.set('password', '04as89v4v');
map.set('email', 'john@gmail.com');

for (let [key, value] of map) {
  console.log(key + ': ' + value);
}
