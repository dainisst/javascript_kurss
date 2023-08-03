const arr1 = ["suns", "kakis", "pele"];
arr1.push("vilks", "lacis");


arr1.forEach((element) => console.log(element));


const container = document.querySelector(".container");
arr1.forEach((element) => container.innerHTML += `<p>${element}</p>`);


const arr2 = ["jāuzraksta vēstle", "jānopērk velosipēds", "jāiztīra māja"];

const myTable = document.querySelector(".myTable");
arr2.forEach((item) => myTable.innerHTML += `<tr><td>${item}</td><td><button>X</button></td></tr>`);