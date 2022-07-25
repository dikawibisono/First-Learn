function isPalindrome(int){
    int = int + ''
    for(let i = 0 ; i < Math.floor(int.length) ; i++){
        if(int[i] !== int[int.length - 1 - i]){
            return false
        }
    }
    return true
}   

console.log(isPalindrome(12333733321)) //true
console.log(isPalindrome(1231)) //false

// function sum(a,b){
//     return a+b
// }

console.log(Math.floor(5.5));