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
    console.log("i am displaying the  data ");
  }, 2000);
}
fetchData(() => {
  arrangeData(() => {
    displayData();
  });
});
