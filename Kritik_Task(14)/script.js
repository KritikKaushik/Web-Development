var n=10;
console.log(`Sum of N natural Numbers`);
var sum=0;
for(var i=1;i<=n;i++){
    sum+=i;
}

console.log(`The sum of ${n} natural Number is:${sum}`);

var n1=5;

console.log(`Table of ${n1}`);

for(var i=1;i<11;i++){
    console.log(`${i} * ${n1} = ${i*n1}`);
}
var a=17;
var check=false;

for(var i=2;i<(a/2);i++){
    if(a%2==0){
        console.log(`${a} is not an Prime Number`);
        check=false;
        break;
    }else{
        check=true;
    }
}
if(check===true){
    console.log(`${a} is an Prime Number`);
}
var n2=7;
console.log(`Print all Factors`);
for(var i=1;i<=n2;i++){
    if(n2%i==0){
        console.log(`${i} is a Factor of ${n2}`)
    }
}

var n3=153;
var n3n=n3;
var digitSum=0;
var digits=0;
while(n3>0){
    digits++;
    n3=Math.floor(n3/10);
}
n3=n3n;
while(n3>0){
    digitSum+=((n3%10)**digits);
    n3=Math.floor(n3/10);
}
if(n3n==digitSum){
    console.log(`${n3n} is an ArmStrong Number`);
}else{
    console.log(`${n3n} is not an ArmStrong Number`);
}


