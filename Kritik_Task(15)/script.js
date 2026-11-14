var arr=[10,2,3,4,5,6,7,8];




function findMax(arr){
    var max=arr[0];
    for(var i=0;i<arr.length;i++){
        if(max<arr[i])
        max=arr[i];
    }
console.log(`${max} is the max value`);
}

const sumVal=(arr)=>{
    var sum=0;
    for(var i=0;i<arr.length;i++){
   sum+=arr[i];
}

console.log(`${sum} is the sum of all the values`);
}


findMax(arr);
sumVal(arr);
(function(arr){
    var oddNum=0;
    for(var i=0;i<arr.length;i++){
   if(arr[i]%2!=0){
    oddNum++;
   }
}
console.log(`${oddNum} is the odd values in array`);

})(arr);
