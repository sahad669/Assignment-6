

let word = prompt("Enter a paragraph")
let = vowels = 0
let = consonents = 0

for (let i=0;i<word.length;i++){
    
  if(word>='a' && word<='z'){
    if("aeiou".includes(word[i])){
        vowels+=1
    }else{
        consonents+=1
    }

  }
}
console.log(`total number of vowels is ${vowels}`)
console.log(`total number of consonents is ${consonents}`)

