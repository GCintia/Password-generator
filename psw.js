let First = document.getElementById('first')
let Second = document.getElementById('second')
let Third = document.getElementById('third')
let Fourth = document.getElementById('fourth')
document.getElementById("genbtn").addEventListener("click", Generate)

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q",
"R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n",
"o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8",
 "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",
 ":",";","<",">",".","?","/"];



const passwLength = 12

//  GENERATING RANDOM NUMBER
function randomNum(){
  const number = Math.floor(Math.random() * characters.length)
  return characters[number]
}

function randomPassword(){
let password = ""
for (let i= 0; i< passwLength; i++){
  password += randomNum()
}
return password
}

function Generate(){
let randomOne = randomPassword()
let randomTwo = randomPassword()
let randomThree = randomPassword()
let randomFour = randomPassword()
First.textContent = randomOne
Second.textContent = randomTwo
Third.textContent = randomThree
Fourth.textContent = randomFour
}
