
let word  = prompt("Enter a word ")

let reverseword = ""

for(let i=word.length-1;i>=0;i--){
    reverseword  = reverseword + word[i]
}

console.log(`reversed word is  ${reverseword}`)