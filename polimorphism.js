class Mobile {
  buyProduct() {
    console.log("I am buying a product");
  }
}
class Apple extends Mobile {
  byProduct() {
    console.log("i am going to by apple mobile");
  }
}
class Samsung extends Mobile {
  byproduct() {
    console.log("buying samsung");
  }
}
let value = new Mobile();
value.buyProduct();
