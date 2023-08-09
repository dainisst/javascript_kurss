// const arr1 = ["suns", "kakis", "pele"];
// arr1.push("vilks", "lacis");


// arr1.forEach((element) => console.log(element));


// const container = document.querySelector(".container");
// arr1.forEach((element) => container.innerHTML += `<p>${element}</p>`);


// let arr2 = [];

// const inputBtn = document.querySelector("#inputBtn");
// const myTable = document.querySelector(".myTable");
// const inputBox = document.querySelector("#inputBox").value;

// inputBtn.addEventListener('click', () => {      
//     arr2.push(inputBox);     
// });

// arr2.forEach((item) => myTable.innerHTML += `<tr id="tableRow"><td id="tableCol">${item}</td><td id="tableColBtn"><button id="btn">X</button></td></tr>`);

let myArr = [];


const inputBtn = document.querySelector("#inputBtn");
const outputCtn = document.querySelector("#outputContainer");

inputBtn.addEventListener('click', () => {
    const inputText = document.querySelector("#inputText").value;
    myArr.push(inputText); 
    showList();  
})

function showList(){
    myArr.forEach(element => {
        outputCtn.innerHTML += `<p id="outputText">${element}</p>`;
    });
}
// showList();
console.log(myArr);