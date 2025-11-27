function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let isTrue = true;
      if (isTrue) {
        resolve("i am fetching the data");
      } else {
        reject("i am not able to fetching the data");
      }
    }, 4000);
  });
}
function arrangeData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("i am arranging the data");
    }, 3000);
  });
}
function displayData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("i am displaying the  data");
    }, 2000);
  });
}
fetchData()
  .then((message) => {
    console.log(message);
    return arrangeData();
  })
  .then((message) => {
    console.log(message);
    return displayData();
  })
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

//if is not executed then it will stop the all the scenario.
//example fetchingdata is not executed then arranging and displaying data also not executed.
