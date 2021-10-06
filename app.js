const output = document.getElementById("output");
var prev = 0
var curr = 0
var operation = "";
var flag = true;

const operate = (op) => {
    a = parseFloat(prev)
    b = parseFloat(curr)
    switch (op) {
        case 'div':
            if (curr == 0) {
                alert("Can't divide by zero")
            }
            else {
                output.textContent = a / b;
            }
            break;
        case 'mult':
            output.textContent = a * b;
            break;
        case 'add':
            output.textContent = a + b;
            break;
        case 'sub':
            output.textContent = a - b;
            break;
        default:
            break;
    }
    prev = output.textContent;
    curr = output.textContent;
    flag = false;
}

class NumButton {
  constructor(id, value) {
    this.button = document.getElementById(id);
    this.value = value;
  }

  onClick() {
    if (curr !== 0 && flag) {
        output.textContent = output.textContent.concat(this.value);
    }
    else {
        output.textContent = this.value;
        flag = true;
    }
    curr = output.textContent;
  }
}
//button set up
const one = new NumButton("one", 1);
one.button.addEventListener("click", function () {
  one.onClick();
});

const two = new NumButton("two", 2);
two.button.addEventListener("click", function () {
  two.onClick();
});

const three = new NumButton("three", 3);
three.button.addEventListener("click", function () {
  three.onClick();
});

const four = new NumButton("four", 4);
four.button.addEventListener("click", function () {
  four.onClick();
});

const five = new NumButton("five", 5);
five.button.addEventListener("click", function () {
  five.onClick();
});

const six = new NumButton("six", 6);
six.button.addEventListener("click", function () {
  six.onClick();
});

const seven = new NumButton("seven", 7);
seven.button.addEventListener("click", function () {
  seven.onClick();
});

const eight = new NumButton("eight", 8);
eight.button.addEventListener("click", function () {
  eight.onClick();
});

const nine = new NumButton("nine", 9);
nine.button.addEventListener("click", function () {
  nine.onClick();
});

const zero = new NumButton("zero", 0);
zero.button.addEventListener("click", function () {
  zero.onClick();
});

const dot = document.getElementById("dot");
dot.addEventListener("click", function () {
    if (output.textContent.includes('.')) {
        alert("Not an integer");
    }
    else{
        output.textContent = output.textContent.concat(".")
    }
});

const div = document.getElementById("divide");
div.addEventListener("click", function() {
    operation = "div";
    output.textContent = 0;
    prev = curr;
    curr = 0;
})

const mult = document.getElementById("mult");
mult.addEventListener("click", function() {
    operation = "mult";
    output.textContent = 0;
    prev = curr;
    curr = 0;
})

const sub = document.getElementById("sub");
sub.addEventListener("click", function() {
    operation = "sub";
    output.textContent = 0;
    prev = curr;
    curr = 0;
})

const add = document.getElementById("add");
add.addEventListener("click", function() {
    operation = "add";
    output.textContent = 0;
    prev = curr;
    curr = 0;
})

const equal = document.getElementById("equal");
equal.addEventListener("click", function() {
    operate(operation);
})

