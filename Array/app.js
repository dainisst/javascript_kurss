// const arr1 = ["suns", "kakis", "pele"];
// arr1.push("vilks", "lacis");


// arr1.forEach((element) => console.log(element));


// const container = document.querySelector(".container");
// arr1.forEach((element) => container.innerHTML += `<p>${element}</p>`);


const arr2 = [];

const inputBtn = document.querySelector("#inputBtn");
const myTable = document.querySelector(".myTable");

inputBtn.addEventListener('click', () => {
    const inputBox = document.querySelector("#inputBox").value;  
    arr2.push(inputBox);     
});

arr2.forEach((item) => myTable.innerHTML += `<tr id="tableRow"><td id="tableCol">${item}</td><td id="tableColBtn"><button id="btn">X</button></td></tr>`);

