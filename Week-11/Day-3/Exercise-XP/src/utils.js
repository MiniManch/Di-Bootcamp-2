export default function generateRandomID() {
  const min = 1000; // Minimum 4-digit number (inclusive)
  const max = 9999; // Maximum 4-digit number (inclusive)

  const randomID = Math.floor(Math.random() * (max - min + 1) + min);
  return randomID.toString();
}

export function getThatKeyFromList(value,array){
  for(let item of array){
    return item;
  //   for(let k in item){
  //     if(item[k] == value){
  //       return item;
  //     }
  //   }
  }
}


export function getRandomRgbColor() {
    const r = Math.floor(Math.random() * 256); 
    const g = Math.floor(Math.random() * 256); 
    const b = Math.floor(Math.random() * 256); 

    return `rgb(${r}, ${g}, ${b})`;
  }


export function isAllLetters(inputString) {
  const lettersRegex = /^[A-Za-z]+$/;

  return lettersRegex.test(inputString);
}