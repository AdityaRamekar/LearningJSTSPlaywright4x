let temp = 35;
let feel = (temp >= 40)?"very hot":
    (temp >=30)?"hot":
        (temp >= 20)?"Warm":
            (temp >= 10) ? "Cool":"Cold";

console.log(feel);