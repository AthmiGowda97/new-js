function speedingsystem() {
  let speed = 0;

  return function accelerate() {
    speed = speed + 10;
    console.log("my vehicle is at speed", speed);
  };
}
let car = speedingsystem();
car();
car();
