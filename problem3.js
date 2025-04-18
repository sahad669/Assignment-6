
let num = Number(prompt("Type a number to check whether \n it is prime or composite "))

if(num%2==0 || num%4==0 || num%6==0){
    console.log(`${num} is a composite`)
}else{
    console.log(`${num} is a prime `)
}