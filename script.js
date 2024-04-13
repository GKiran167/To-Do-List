let input = document.getElementById('input')
let btn = document.getElementById('add')
let todoList = document.getElementById('todoList')

let todos = []

window.onload= ()=>{
    // window loaded -----------
    console.log("window loaded")
   todos = JSON.parse(localStorage.getItem('todos')) || []  
   todos.forEach(todo => addtodoList(todo));
}

btn.addEventListener('click', () => {
    if (input.value != '') {
        todos.push(input.value); 
        localStorage.setItem('todos',JSON.stringify(todos))
        // localStorage.setItem('copy',JSON.stringify(todos))
        addtodoList(input.value);
        input.value = ""
    }
})

function addtodoList(inputval) {
    let para = document.createElement('p')
    para.innerText = '‣ '+inputval;
    todoList.appendChild(para);
    // localStorage.setItem('todos',JSON.stringify(todos))
    // localStorage.setItem('copy',JSON.stringify(todos))
    para.addEventListener('click', () => {
        para.style.textDecoration = 'line-through'
        remove(inputval)
    })

    para.addEventListener('dblclick', () => {
        todoList.removeChild(para)
        remove(inputval)
    })
}

function remove(inputval) {
    let index = todos.indexOf(inputval)
    if (index > -1)
        todos.splice(index, 1)
    localStorage.setItem('todos',JSON.stringify(todos))
}

document.addEventListener('keypress',e=>{
    if(e.key=="Enter"){
        if (input.value != '') {
            todos.push(input.value); 
            localStorage.setItem('todos',JSON.stringify(todos))
            addtodoList(input.value);
            input.value = ""
        }
    }
})