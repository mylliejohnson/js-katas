/* 
A trick I learned in elementary school to determine whether or not a number was divisible by three is to add all of the integers in the number together and to divide the resulting sum by three. If there is no remainder from dividing the sum by three, then the original number is divisible by three as well.

Given a series of digits as a string, determine if the number represented by the string is divisible by three.

You can expect all test case arguments to be strings representing values greater than 0.

Example:

"123"      -> true
"8409"     -> true
"100853"   -> false
"33333333" -> true
"7"        -> false
Try to avoid using the % (modulo) operator.
*/

function divisibleByThree(str){
    let sum = 0
    
    for(let i = 0; i < str.length; i++){
      let num = str[i]
      sum += Number(num)
    }
    if (sum % 3 === 0){
      return true
    }
    return false
  }

  /////

  /*
  function divisibleByThree(str){
    return str.split('').reduce((a,b)=>a+b*1,0)%3===0
  }
  */