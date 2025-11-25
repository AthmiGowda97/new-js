class Bank {
  constructor(name) {
    this.name = name;
  }
}
class AxisBank extends Bank {
  constructor(name, city) {
    super(name);
    this.city = city;
  }
}
let value = new AxisBank("bank", "bangalore");
console.log(value);
//super key refers to parent component.
//superkeyword always connected to parents class.
