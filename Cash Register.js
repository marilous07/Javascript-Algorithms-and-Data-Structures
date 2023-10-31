function checkCashRegister(price, cash, cid) {
  // Ορίζουμε τα διαθέσιμα ψηφιακά νομίσματα και την αξία τους
  const currencyUnit = [
    { name: "PENNY", value: 0.01 },
    { name: "NICKEL", value: 0.05 },
    { name: "DIME", value: 0.1 },
    { name: "QUARTER", value: 0.25 },
    { name: "ONE", value: 1 },
    { name: "FIVE", value: 5 },
    { name: "TEN", value: 10 },
    { name: "TWENTY", value: 20 },
    { name: "ONE HUNDRED", value: 100 }
  ];

  // Υπολογίζουμε το ρέστο (change) που πρέπει να δοθεί
  let changeDue = cash - price;

  // Υπολογίζουμε το συνολικό ποσό στο cash-in-drawer (cid)
  const totalInDrawer = cid.reduce((acc, item) => acc + item[1], 0);

  // Ελέγχουμε αν το ρέστο είναι περισσότερο από το συνολικό ποσό στο cash-in-drawer
  if (changeDue > totalInDrawer) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  // Αρχικοποιούμε τον πίνακα για το ρέστο (change)
  let change = [];

  // Υπολογίζουμε το ρέστο χρησιμοποιώντας τα διαθέσιμα ψηφιακά νομίσματα
  for (let i = currencyUnit.length - 1; i >= 0; i--) {
    const { name, value } = currencyUnit[i];
    const availableAmount = cid[i][1];
    const maxCoins = Math.floor(availableAmount / value);
    let coinsToReturn = 0;

    while (changeDue >= value && coinsToReturn < maxCoins) {
      changeDue -= value;
      changeDue = Number(changeDue.toFixed(2)); // Αποφύγουμε το στρογγυλοποίηση λάθος
      coinsToReturn++;
    }

    if (coinsToReturn > 0) {
      change.push([name, coinsToReturn * value]);
    }
  }

  // Ελέγχουμε αν έχουμε επαρκές ρέστο ή αν είναι κλειστό το ταμείο
  if (changeDue > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (changeDue === 0 && totalInDrawer === change.reduce((acc, item) => acc + item[1], 0)) {
    return { status: "CLOSED", change: cid };
  } else {
    return { status: "OPEN", change };
  }
}

// Δοκιμή της συνάρτησης με τα δεδομένα σας
const result = checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]);

console.log(result);
