// Exemplu de utilizare a instrucțiunii switch
function getDayType(day) {
  switch (day) {
    case 'Luni':
    case 'Marti':
    case 'Miercuri':
    case 'Joi':
    case 'Vineri':
      return 'Zi lucrătoare';

    case 'Sambata':
    case 'Duminica':
      return 'Weekend';

    default:
      return 'Zi invalidă';
  }
}
console.log(getDayType('Luni')); // Zi lucrătoare
console.log(getDayType('Sambata'));
// metoda ternară
let total = 500;
let shipping = total > 500 ? 'Livrare gratuită' : 'Cost de livrare: 50 lei';
console.log(shipping); // Livrare gratuită
// metoda ternară pentru verificarea vârstei
function checkAge(age) {
  return age >= 18 ? 'Ești major' : 'Ești minor';
}
console.log(checkAge(20)); // Ești major
console.log(checkAge(16)); // Ești minor
// Array methods
const marime = ['S', 'M', 'L', 'XL'];
marime[0] = 'XS'; // Modificăm primul element
console.log(marime); // ["XS", "M", "L", "XL"]
marime.push('XXL'); // Adăugăm un element la sfârșitul array-ului
console.log(marime); // ["XS", "M", "L", "XL", "XXL"]
console.log(marime.length); // 5 // Afișăm lungimea array-ului
console.log(marime.toString()); // "XS,M,L,XL,XXL" // Convertim array-ul în string

// sortarea array-ului
function sortArray(a, b) {
  return a - b; // sortare crescătoare
}
let numbers = [5, 2, 9, 1, 5, 6];
numbers.sort(sortArray);
console.log(numbers); // [1, 2, 5, 5, 6, 9]

function printArray2(a, b) {
  return a + b; // sortare descrescătoare
}
let numbers2 = [5, 2, 9, 1, 5, 6];
numbers2.sort(printArray2);
console.log(numbers2); // [9, 6, 5, 5, 2, 1]

// Microexercițiu
let products = ['Dress', 'Shirt', 'T-Shirt', 'Jacket'];
let prices = [150, 240, 55, 485];

products.push('Blouse'); // Adăugăm un element la sfârșitul array-ului
prices.push(401);

products.unshift('Coat'); // Adăugăm un element la începutul array-ului
prices.unshift(799);
console.log(products.length); // 6 // Afișăm lungimea array-ului
console.log(prices.length); // 6

products.pop(); // Eliminăm ultimul element
prices.pop(); // Eliminăm ultimul element

products.sort(); // Sortăm array-ul de produse
console.log(products.toString()); // "Coat,Dress,Jacket,Shirt,T-Shirt"
prices.sort(function (a, b) {
  return a - b; // Sortare crescătoare
});
console.log(prices.toString()); // "55,150,240,485,799"
