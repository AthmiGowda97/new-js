class House {
  constructor(name) {
    this.name = name;
  }
  myHouse() {
    console.log(`My house name is ${this.name}`);
  }
}
let value = new House("House");
value.myHouse();
