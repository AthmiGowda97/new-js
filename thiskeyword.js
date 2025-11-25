let obj = {
  name: "athmika",
  sayhello: function () {
    console.log(`my name is  ${this.name}`); //back tick
  },
};
obj.sayhello();

//this keyword is used to refer the object context value.
//This keyword is refers to the current object.
