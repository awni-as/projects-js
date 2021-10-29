function increment() {
  document.getElementById("number").innerHTML =
    Number(document.getElementById("number").innerHTML) + 1;
}

function decrement() {
  document.getElementById("number").innerHTML =
    Number(document.getElementById("number").innerHTML) - 1;
}

function reset() {
  document.getElementById("number").innerHTML = 0;
}
