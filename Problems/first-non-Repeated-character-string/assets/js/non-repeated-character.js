function firstNonRepeatedChar(str){
  let obj = {};
  for(let item of str){
    if(obj[item]){
      obj[item]++;
    }else {
      obj[item] = 1;
    }
  }
  let nonRepeatedChars = [];
  for(let item in obj){
    if(obj[item] === 1){
      return item; 
    }
  }
}



let str = "aarma";
const result = firstNonRepeatedChar(str);
console.log(result);