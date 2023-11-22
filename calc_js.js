let b = "";
let buttons = document.querySelectorAll(".btn");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      console.log(b);
      b = eval(b);
      document.getElementById("displayarea").innerHTML = b;
    } else if (e.target.innerHTML == "C") {
      document.getElementById("displayarea").innerHTML = "  ";
      b = e.target.value = 0;
      console.log(e.target.value);
    } else {
      console.log(b);
      console.log(e.target);
      b = b + e.target.innerHTML;
      document.getElementById("displayarea").innerHTML = b;
    }
  });
});
