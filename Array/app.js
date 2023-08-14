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

// let myArr = [];


// const inputBtn = document.querySelector("#inputBtn");
// const outputCtn = document.querySelector("#outputContainer");

// inputBtn.addEventListener('click', () => {
//     const inputText = document.querySelector("#inputText").value;
//     myArr.push(inputText); 
//     showList();  
// })

// function showList(){
//     myArr.forEach(element => {
//         outputCtn.innerHTML += `<p id="outputText">${element}</p>`;
//     });
// }
// // showList();
// console.log(myArr);

// const cities = [
//     // "riga",
//     // "tallina",
//     // "parize",
//     // "londona",
//     // "berline"
// ];
// const inputText = document.querySelector("#inputText");
// const inputBtn = document.querySelector("#inputBtn");

// inputBtn.addEventListener('click', () => {
//     cities.push(inputText.value);
//     document.querySelector("#outputContainer").innerHTML = `<ul>${listItems()}</ul>`;
//     inputText.value = '';   
// })

// function listItems(){
//     let items = "";
//     for(i = 0; i < cities.length; i++){
//         items += `<li><p>${cities[i]}</p><button id="delBtn">X</button></li>`;
//     }
//     return items;
// }

// document.querySelector("#outputContainer").innerHTML = `<ul>${listItems()}</ul>`;


function save(){
    const new_data = ' ' + document.querySelector("#inputText").value;
    if(localStorage.getItem('data') == null){
        localStorage.setItem('data', '[]');
    }

    const old_data = JSON.parse(localStorage.getItem('data'));
    old_data.push(new_data);

    localStorage.setItem('data', JSON.stringify(old_data));
    view();
}

function view(){
    if(localStorage.getItem('data') != null){
        document.querySelector("#outputContainer").innerHTML = JSON.parse(localStorage.getItem('data'));
    }
}
view();