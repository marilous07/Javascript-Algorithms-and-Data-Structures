function convertToRoman(num) {
  // Οι ρωμαϊκοί αριθμοί και οι αντίστοιχες αραβικές τιμές
  const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  let roman = ""; // Ο τελικός ρωμαϊκός αριθμός

  // Επεξεργασία του αριθμού
  for (let key in romanNumerals) {
    while (num >= romanNumerals[key]) {
      roman += key; // Προσθήκη του ρωμαϊκού συμβόλου
      num -= romanNumerals[key]; // Αφαίρεση της αντίστοιχης αραβικής τιμής
    }
  }

  return roman;
}

// Δοκιμή της συνάρτησης με έναν αριθμό
console.log(convertToRoman(36)); // "XXXVI"
console.log(convertToRoman(1994)); // "MCMXCIV"
