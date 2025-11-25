class House {
  constructor(name) {
    this.name = name;
  }
  myHouse() {
    console.log(`My house name is ${this.name}`);
  }
}
class Myhouse extends House {}
let value = new Myhouse("david");
value.myHouse();
