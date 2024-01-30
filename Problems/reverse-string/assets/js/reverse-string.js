function reverseString(str){
  let result = "";
  for(let i=str.length-1; i>=0; i--){
      result +=str[i];
  }
  return result;
}

const str = "Rama"
const result = reverseString(str);
console.log(result);