//to overcomne callback hell we will follow promises.
//promise is a javascript object it will either resolve or reject/success or failure.

let lifeline = new Promise((resolve, reject) => {
  let havaJob = true;
  if (havaJob) {
    console.log("he/she accepted");
  } else {
    reject("he/she rejected");
  }
});
lifeline
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

let donttell = new Promise((resolvbe, reject) => {
  let givemoney = false;
  if (givemoney) {
    console.log("i will never say anyone");
  } else {
    reject(" i will say to everybody");
  }
});
donttell
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
