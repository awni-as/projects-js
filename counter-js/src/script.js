function increment() {
  var number = Number(document.getElementById("number").innerHTML);
  document.getElementById("number").innerHTML = number + 1;
}

function decrement() {
  var number = Number(document.getElementById("number").innerHTML);
  document.getElementById("number").innerHTML = number - 1;
}

function reset() {
  document.getElementById("number").innerHTML = 0;
}
