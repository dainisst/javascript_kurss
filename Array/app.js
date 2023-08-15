
const new_data = document.querySelector("#inputData");

function save(){    
    if(localStorage.getItem('data') === null){
        localStorage.setItem('data', '[]');
    }

    const old_data = JSON.parse(localStorage.getItem('data'));
    old_data.push(new_data.value);
    new_data.value = "";
    
    localStorage.setItem('data', JSON.stringify(old_data));
    
    view();    
}

function view(){
    let outputData = "";
    let dataShow = document.querySelector("#outputData");
    let dataList = JSON.parse(localStorage.getItem('data'));

    dataList.forEach((data, index) => {
        outputData += `
        <li><p>${data}</p><button id="delBtn" onClick="deleteItem(${index})">X</button></li>
        `
    });
    dataShow.innerHTML = outputData;    
}
view();

function deleteItem(index){
    let dataList = JSON.parse(localStorage.getItem('data'));
    dataList.splice(index, 1);
    localStorage.setItem('data', JSON.stringify(dataList))
    view();
}