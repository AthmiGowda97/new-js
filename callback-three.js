function fetchData(callback) {
  setTimeout(() => {
    console.log("i am fetching the data");
    callback();
  }, 4000);
}

function arrangeData(callback) {
  setTimeout(() => {
    console.log("i am arranging the data");
    callback();
  }, 3000);
}
function displayData() {
  setTimeout(() => {
    console.log("i am displaying the  data");
  }, 2000);
}
fetchData(() => {
  arrangeData(() => {
    displayData();
  });
});

// funcionCallback hell in JavaScript refers to the situation where multiple asynchronous functions are nested inside each other, creating deeply indented code that is hard to read, debug, and maintain.
//to overcome callback hell we will follow promises.
