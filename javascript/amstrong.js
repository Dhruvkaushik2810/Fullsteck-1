let num = 153;
let order= num.toString().length;
let temp=num;
let sum=0;
while(num>0){
    let rem=num%10;
    sum=sum+rem**order;
    num=Number.parseInt(num/10);
}
if(temp==sum){
    console.log("Amstrong")
}else{
    console.log("No")
}