function bank() {
  function data() {
    data();
  }
}
bank();

//closure
function bank() {
  function data() {
    return data;
  }
}
bank();

//example
