let del = document.body.querySelector(".delete");
let clear = document.body.querySelector(".clear");
let dot = document.body.querySelector(".dot");
let percentage = document.body.querySelector(".percentage");
let divide = document.body.querySelector(".divide");
let plus = document.body.querySelector(".plus");
let minus = document.body.querySelector(".minus");
let multiply = document.body.querySelector(".multiply");
let one = document.body.querySelector(".one");
let two = document.body.querySelector(".two");
let three = document.body.querySelector(".three");
let four = document.body.querySelector(".four");
let five = document.body.querySelector(".five");
let six = document.body.querySelector(".six");
let seven = document.body.querySelector(".seven");
let eight = document.body.querySelector(".eight");
let nine = document.body.querySelector(".nine");
let zero = document.body.querySelector(".zero");
let equals_to = document.body.querySelector(".equals-to");
let display = document.body.querySelector(".display-input");
let sqrt = document.body.querySelector(".sqrt");
let sqr = document.body.querySelector(".sqr");
let cube = document.body.querySelector(".cube");
let pie = document.body.querySelector(".pie");
let all_button  = document.body.querySelector(".btn");

equals_to.addEventListener("click", () => {
    let a = display.value;
    if (a == NaN.toString()) {
        display.value = `error`;
    } else if (a == "undefined") {
        display.value = `error`;
    }
})

function print(value) {
    display.value = display.value + value.trim();
}

function sprint(value) {
        display.value = display.value + value.trim() + ` of `;
}

function pprint(value) {
    if(display.value == `22/7`){
        display.value = `22/7`
    } else {
        display.value = display.value + `22/7`;
    }
}

function delt(value) {
    display.value = display.value.toString().slice(0, display.value.length - 1);
}

function all_clear() {
    display.value = "";
}

function result(value) {
    display.value = eval(value);
}

equals_to.addEventListener("click", () => {
    if (display.value.toString().startsWith("sqrt")) {
        let num = display.value.toString().slice(display.value.toString().indexOf('f') + 2, display.value.length + 1);
        let result = Math.sqrt(num).toString();
        if (result == `NaN`) {
            display.value = `error`;
        } else {
            display.value = Math.sqrt(num);
        }
    }
})

equals_to.addEventListener("click", () => {
    if (display.value.toString().startsWith("sqr")) {
        let num = display.value.toString().slice(display.value.toString().indexOf('f') + 2, display.value.length + 1);
        let result = Math.sqrt(num).toString();
        if (result == `NaN`) {
            display.value = `error`;
        } else {
            display.value = num * num;
        }
    }
})

equals_to.addEventListener("click", () => {
    if (display.value.toString().startsWith("cube")) {
        let num = display.value.toString().slice(display.value.toString().indexOf('f') + 2, display.value.length + 1);
        let result = Math.sqrt(num).toString();
        if (result == `NaN`) {
            display.value = `error`;
        } else {
            display.value = num * num * num;
        }
    }
})