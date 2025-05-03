const todoInput=document.getElementById("input")
const todoBtn=document.getElementById("add")
const todoDel=document.getElementById("dell")
const todoUl=document.getElementsByClassName("todo-list")[0]




    todoBtn.addEventListener('click', function() {
        console.log("Button Clicked")
        console.log(todoInput.value)

        const NewElement=document.createElement('li')
        NewElement.innerText=todoInput.value

        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = "❌";
        
        todoUl.appendChild(NewElement)
        NewElement.appendChild(deleteBtn);
      
        
            deleteBtn.addEventListener('click', function () {
                todoUl.removeChild(NewElement);
            });
           
            
                    
                });
            




