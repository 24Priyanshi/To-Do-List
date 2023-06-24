const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-containers");
function addTask(){
    if(inputBox.value===''){
        alert("Box is empty");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("button");
        span.innerHTMl= "<i class = "fa fa-check"></i>";
        li.appendChild(button);
    }
    inputBox.value="";
} 
listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="BUTTON"){
        e.target.parentElement.remove();
        saveData();

    }
},false);
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);

}

function showTask(){
    listContainer.inne
    erHTML=localStorage.getItem("data");
}
showTask();
