function myFunction(numar) {
  if (numar === 'gold') {
    console.log('Felicitari!EstiMembruGold!');
  } else if (numar === 'silver') {
    console.log('Felicitari! Esti Membru Silver!');
  } else {
    console.log('Ne pare rau! Nu esti membru!');
  }
}

myFunction('gold');
myFunction('silver');
myFunction('bronze');
