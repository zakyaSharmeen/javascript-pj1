let addBtn = document.getElementById('add-btn')
addBtn.addEventListener('click', addChapter)
let parentList = document.getElementById('parentList');


function addChapter(e){ 

    // ---added the items---------

    // graping the target text from the input wc is the next sibling of the button 
    if(parentList.children[0].className == "emptyMsg"){
      parentList.children[0].remove();
       
    }
    let currentBtn = e.currentTarget;
    let currentInput = currentBtn.previousElementSibling
    let currentChapter = currentInput.value;

    console.log(currentInput.value)


    // creating the element
    let newLi = document.createElement('li')
    newLi.classList.add('list-group-item')
    newLi.innerHTML = `<li class="list-group-item  d-flex justify-content-between">
    <h3 class="flex-grow-1">${currentChapter}</h3>
      <button class="btn btn-warning mx-5">edit</button>
      <button class="btn btn-danger" onclick="removeChapter(this)" >remove</button>

    </li>`

    // dom insertion
    parentList.appendChild(newLi)
    


}

function removeChapter(currentElement){
  
   currentElement.parentElement.remove();
   let parentList= document.getElementById('parentList');
   if(parentList.children.length <= 0){
    let newEmptyMsg = document.createElement("h3")
    newEmptyMsg.textContent ="GO for it Zakya..."
    parentList.appendChild(newEmptyMsg)
  }





    

}






