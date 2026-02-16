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

let total = 500;
let shipping = total > 500 ? 'Livrare gratuită' : 'Cost de livrare: 50 lei';
console.log(shipping); // Livrare gratuită

function checkAge(age) {
  return age >= 18 ? 'Ești major' : 'Ești minor';
}
console.log(checkAge(20)); // Ești major
console.log(checkAge(16)); // Ești minor
