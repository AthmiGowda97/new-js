class bank {
  bankBalance() {
    console.log("MY bank balance");
  }
}
class AxisBank extends bank {
  bankBalance() {
    console.log("My axis Bank");
  }
}

let banks = new bank();
banks.bankBalance();

class DL {
  isEligible(name, age) {
    if (age == undefined || age < 18) {
      console.log("not eligible");
    } else {
      console.log("eligible");
    }
  }
}
let value = new DL();
value.isEligible("David");
value.isEligible("David", 19);
