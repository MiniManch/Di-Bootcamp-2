export default function generateRandomID() {
  const min = 1000; // Minimum 4-digit number (inclusive)
  const max = 9999; // Maximum 4-digit number (inclusive)

  const randomID = Math.floor(Math.random() * (max - min + 1) + min);
  return randomID.toString();
}

export function getRandItem(arr,prevItem) {
  const randomIndex = Math.floor(Math.random() * arr.length);

  while (arr[randomIndex] === prevItem){
    console.log(1)
    randomIndex = Math.floor(Math.random() * arr.length);
  }

  return arr[randomIndex];
}

export const  colors = [
  'Powder-Blue',
  'Lavender',
  'Aquamarine',
  'Mint-Green',
  'Sky-Blue',
  'Pale-Pink',
  'Lilac',
  'Peach',
  'Pastel-Green',
  'Periwinkle',
];
