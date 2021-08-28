// Write function which will create a string from a list of strings, separated by space.

// Example:
// ["hello", "world"] -> "hello world"

function wordsToSentence(words) {
    let str = ""
    
    for(let word of words){
      str += (word + " ") 
    }
     
    return str.trim()
   }