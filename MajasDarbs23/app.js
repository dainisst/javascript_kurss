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

// Faktoriāļa aprēķins

const faktorialisBtn = document.querySelector("#faktorialisBtn");
const faktorialisOut = document.querySelector("#outputFaktorialis");

faktorialisBtn.addEventListener("click", () => { 
  const faktorialisIn = document.querySelector("#inputFaktorialis").value;
  let result = 1;
  for(ia = 1; ia <= faktorialisIn; ia++){
    result = result * ia;
  }
  faktorialisOut.innerHTML = `Faktorālis ir: ${result}`;
})

// Faktorāļa summas aprēķins

const faktorialisOutSum = document.querySelector("#outputFaktorialisSum");

faktorialisBtn.addEventListener("click", () => { 
  const faktorialisIn = document.querySelector("#inputFaktorialis").value;
  let resultSum = 0;
  for(ib = 1; ib <= faktorialisIn; ib++){
    resultSum = resultSum + ib;
  }
  faktorialisOutSum.innerHTML = `Summējošais Faktorālis ir: ${resultSum}`;
})

// Apgrieztais teksts

const tekstsOut = document.querySelector("#outputTeksts");
let vardsNew = "";
const tekstsBtn = document.querySelector("#textBtn");

function mFunction (){  
  let tekstsIn = document.querySelector("#inputTeksts");
  let tekstsArray = tekstsIn.split("");
  for(ka = tekstsIn.length - 1; ka >= 0; ka--){
    vardsNew = vardsNew + tekstsArray[ka]; 
  }
  tekstsOut.innerHTML = vardsNew;
}

tekstsBtn.addEventListener('click', mFunction());