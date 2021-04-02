// 1. In the programming language you feel most comfortable, write a program that prints the
// numbers from 1 to 100. But for multiples of three print "Ice" instead of the number and
// for multiples of five print "Cream". For numbers that are multiples of both three and five
// print "IceCream". 
//  for loop
let arr = []
    for( let i = 1; i <= 100; i++){
        let number = i;
        arr.push(
            number % 5 === 0 && number % 3 === 0 ? "Ice-Cream"  : number 
            && number % 3 === 0 ?  "Ice"  : number && 
            number % 5 === 0 ? "Cream" : number)
    }
console.log(arr)
//  while loop
let number=0;
while( ++number <= 100) {
    console.log(number % 5 === 0 && number % 3 === 0 ? "Ice-Cream"  : number 
    && number % 3 === 0 ?  "Ice"  : number && 
    number % 5 === 0 ? "Cream" : number)
}