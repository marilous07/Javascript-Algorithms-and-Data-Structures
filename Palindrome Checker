function palindrome(str) {
  // Αφαιρούμε όλους τους χαρακτήρες που δεν είναι αλφαριθμητικοί και μετατρέπουμε σε πεζά όλους τους χαρακτήρες
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Δημιουργούμε το ανάστροφο του κειμένου
  const reversedStr = str.split("").reverse().join("");

  // Ελέγχουμε αν το κείμενο και το ανάστροφο του είναι ίδια
  return str === reversedStr;
}

// Δοκιμή της συνάρτησης με διάφορα κείμενα
console.log(palindrome("racecar"));     // true
console.log(palindrome("RaceCar"));     // true
console.log(palindrome("race CAR"));    // true
console.log(palindrome("2A3*3a2"));     // true
console.log(palindrome("2A3 3a2"));     // true
console.log(palindrome("2_A3*3#A2"));   // true
console.log(palindrome("hello"));       // false
