function addMoney(value, callback) {
  setTimeout(() => {
    console.log(`i have added money`, value);
    callback(value);
  }, 2000);
}
function displayBalance(value) {
  console.log(`my current balance`, value);
}

addMoney(1000, displayBalance);
