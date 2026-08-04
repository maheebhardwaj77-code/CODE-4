let count = 0;
let num = Number(prompt("enter your number :"))

while(num > 0) {
    count++;
    num = Math.floor(num/10);
}

console.log(count);