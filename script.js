const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");

let exp = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let value = button.innerText;
    if (value === "×") value = "*";
    if (value === "÷") value = "/";
    if (value === "AC") {
      exp = "";
    }
    else if (value === "X") {
      exp = exp.slice(0, -1);
    }

    else if (value === ".") {
      let parts = exp.split(/[\+\-\*\/]/);
      let lastNumber = parts[parts.length - 1];

      if (lastNumber.includes(".")) return;
      exp = exp + ".";
    }
    else if (value === "=") {
      try {
        exp = eval(exp).toString();
      } catch {
        exp = "Error";
      }
    }
    else if(value=="±"){
        let parts = exp.split(/([\+\-\*\/])/);
        let last = parts[parts.length - 1];

 
        if (last.startsWith("(-") && last.endsWith(")")) {
            last = last.slice(2, -1);
    } 
        else {
            last = "(-" + last + ")";
    }
    parts[parts.length - 1] = last;
        exp = parts.join("");
    }
    else {
      exp = exp + value;
    }

    display.innerText = exp || "0";
    console.log(exp);
  });
});
