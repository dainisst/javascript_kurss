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
const confirmBtn = document.querySelector("#confirmBtn");
const dialogCntn2 = document.querySelector("#dialogCntn2");
const confirmBtn2 = document.querySelector("#confirmBtn2");
const dialogCntn3 = document.querySelector("#dialogCntn3");


registerBtn.addEventListener('click', () => {
  dialogCntn.showModal();
})

confirmBtn.addEventListener('click', (event) => {
  event.preventDefault();
  dialogCntn.close();
  dialogCntn2.showModal();
})

confirmBtn2.addEventListener('click', (event2) => {
  event2.preventDefault();
  dialogCntn2.close();
  dialogCntn3.showModal();
  setTimeout(() => {
    dialogCntn3.close();
  }, "2000")
})

