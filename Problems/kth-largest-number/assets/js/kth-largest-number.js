let arr = [1,3,2,4,5];
let k = 3;
for(let i=0; i<arr.length; i++){
  for(let j=0; j<arr.length; j++){
    if(arr[j] < arr[j+1]){
      temp=arr[j];
      arr[j]=arr[j+1];
      arr[j+1]=temp;
    }
  }
}
console.log(arr[k-1]);