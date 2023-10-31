function telephoneCheck(str) {
  // Ορίζουμε έναν προσαρμογέα για την επιθεώρηση της συμβολοσειράς
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
  // Ελέγχουμε αν η συμβολοσειρά ταιριάζει με τον προσαρμογέα
  return regex.test(str);
}

// Δοκιμή της συνάρτησης με ένα αριθμό τηλεφώνου
console.log(telephoneCheck("555-555-5555")); // true
console.log(telephoneCheck("(555)555-5555")); // true
console.log(telephoneCheck("(555) 555-5555")); // true
console.log(telephoneCheck("555 555 5555")); // true
console.log(telephoneCheck("5555555555")); // true
console.log(telephoneCheck("1 555 555 5555")); // true
console.log(telephoneCheck("2 555 555 5555")); // false
