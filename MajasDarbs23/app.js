let num = 8;
let summa = 0;
let faktorials = 1;
let vards = "Ārmstrongs nolaidās uz mēness!";
let vardsJauns = "";

for(i = 1; i <= num; i++){
  summa = summa + i;
}

console.log(summa);

for(j = 1; j <= num; j++){
  faktorials = faktorials * j;
}

console.log(faktorials);

let vardsArray = vards.split("");

for(k = vards.length - 1; k >= 0; k--){
  vardsJauns = vardsJauns + vardsArray[k]; 
}
console.log(vardsJauns);

let num2 = 123654;
result = 0;

let num2String = num2.toString().split('').map(str => {
  return Number(str);
});

for(l = 0; l < num2String.length; l++){
  result = result + num2String[l];
}

console.log(result);