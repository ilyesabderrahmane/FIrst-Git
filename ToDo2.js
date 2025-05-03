const todoInput=document.getElementById("input")
const todoBtn=document.getElementById("add")
const todoUl=document.getElementsByClassName("todo-list")[0]

let cpt=0

todoBtn.addEventListener('click', function() {

    const Li = document.createElement('li');
    Li.id = "li-" + cpt;

    const p = document.createElement('p');
    p.innerText = todoInput.value;
    p.id = "P-" + cpt;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    Li.appendChild(p);
    Li.appendChild(checkbox);
    todoUl.appendChild(Li);

    cpt++;
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
           p.className=Li.className+"checked"
        } else {
            p.className=p.className.replace('checked','  ')
        }
    });

})






