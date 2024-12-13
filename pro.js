function reverString(str){
    if(str === ''){
        return '';
    }
   
    return reverString(str.substr(1)) + str.charAt(0)
}
function power(base,exponent){
    if(exponent === 0){
        return 1;
    }
    return base * power(base,exponent - 1)
}
function sumarray(arr){
    if(arr.length === 0){
        return 0;
    }
    return arr[0] + sumarray(arr.slice(1))
}

console.log(reverString("Hello There"))

console.log(power(3,4))
let arr=[2,3,4,5,6,7,8,9]
console.log(sumarray(arr))