function findLongestWord (string = "") {
  let result = "";
  // Write code under this line
  let words = string.split(' ');
  for (let i = 0; i < words.length; i++){
      if (result.length < words[i].length){
        result = words[i];
    } 
  }
  return result;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

console.log(findLongestWord('Google do a roll'));
// 'Google'

console.log(findLongestWord('May the force be with you'));