//Switch consition
function input(value) {
  switch (value) {
    case 1:
      console.log("package 10lpa");
      break;

    case 2:
      console.log("7lpa");
      break;

    case 3:
      console.log("5lpa");
      break;

    default:
      console.log("no job");
  }
}
input(3);

//Another method
let type = "tier1";
switch (type) {
  case "tier1":
    console.log("10lpa");
    break;

  case "tier2":
    console.log("7lpa");
    break;

  case "tier3":
    console.log("10lpa");
    break;

  default:
    console.log("no job");
}
