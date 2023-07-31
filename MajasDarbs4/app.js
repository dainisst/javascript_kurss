//Tekst area

let outputText = document.getElementById("outputText");

function myFunction(){
  let counter = 0;
  let inputText = document.getElementById("inputText").value;
    for(i=0;i<=inputText.length;i++){
      counter=+i;
    }
    outputText.innerHTML = `Ievadītā teksta zīmju skaits ir: ${counter}`;  
}

//Dialogs

const registerBtn = document.querySelector("#registerBtn");
const dialogCntn = document.querySelector("#dialogCntn");

registerBtn.addEventListener('click', () => {
  dialogCntn.showModal();
})