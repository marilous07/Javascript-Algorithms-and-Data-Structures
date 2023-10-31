function rot13(str) {
  // Ορίζουμε μια συνάρτηση που θα εκτελεί τη μετατόπιση για έναν χαρακτήρα
  function decodeChar(char) {
    // Αν ο χαρακτήρας είναι γράμμα
    if (/[A-Z]/.test(char)) {
      // Μετατόπιση κατά 13 θέσεις προς τα πίσω στο αλφάβητο
      const code = char.charCodeAt(0);
      if (code >= 78 && code <= 90) {
        return String.fromCharCode(code - 13);
      } else {
        return String.fromCharCode(code + 13);
      }
    }
    // Αν ο χαρακτήρας δεν είναι γράμμα, τότε τον επιστρέφουμε ως έχει
    return char;
  }

  // Χρησιμοποιούμε τη συνάρτηση decodeChar για κάθε χαρακτήρα στο κείμενο
  return str.split("").map(decodeChar).join("");
}

// Δοκιμή της συνάρτησης με ένα ROT13 κρυπτογραφημένο κείμενο
console.log(rot13("SERR PBQR PNZC")); // "FREE CODE CAMP"
