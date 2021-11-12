// for (let age = 30; age < 40; age++) {
//   console.log(`I'm ${age} years old. Happy Birthday to me!`);
  
// }

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);

const writeCards = (arrays, names) => {
  for (let i = 0; i < arrays.length; i++) {
    const newArray = [];
    console.log(newArray)
    newArray.push(`Thank you ${names} for the wonderful birthday gift!`)
   return newArray
   
  }
  
}