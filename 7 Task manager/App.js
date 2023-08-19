let taskbtn=document.querySelector(".task-btn");
// console.log(taskbtn);
let taskInput=document.querySelector(".input");
// console.log(taskInput);
let open=document.querySelector(".open");
let i=0;
taskbtn.addEventListener('click', () =>{
const maindv=document.createElement('div');
const tname=document.createElement('div');
const edit=document.createElement('div');
const description=document.createElement('div');
const save=document.createElement('button');
maindv.id=i;
maindv.className="task_item";
maindv.setAttribute('draggable',true);
maindv.setAttribute('ondragstart','drag(event)');
tname.className="tname";
description.className="description";
save.className="save";
save.textContent="save";
save.style.display="none";
save.setAttribute('onclick','sdescription(this.parentNode)');
edit.className="edit";
edit.setAttribute('onclick','show(this.parentNode)');
tname.textContent=taskInput.value;
maindv.append(tname,description,save,edit);
open.append(maindv);
i++;
})
function show(elem){
    const description=elem.querySelector('.description');
    const save=elem.querySelector('.save');
    description.contentEditable = true;
    description.focus();
    save.style.display="block";
}
function sdescription(elem){
    const description=elem.querySelector('.description');
    const save=elem.querySelector('.save');
    description.contentEditable = false;
    save.style.display="none";
}
function drag(ev){
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    const elem=document.getElementById(data);
    ev.target.appendChild(elem);
}
function allowDrop(ev) {
    ev.preventDefault();
}

