
// let todo = [];

// function addtask(){
//     todo.push({
//         title:document.querySelector("input").value
//     })

//   render();
// }

// function deleteTask(index){
//     todo.splice(index,1);
//     render();
// }

// // react like library 

// function createTaskComponent(todo ,index){
    
//     const div = document.createElement("div");
//     const newTask = document.createElement("li");
//     const button = document.createElement("button");
//     button.innerHTML = "delete";
//     button.setAttribute("onclick","deleteTask("+index+")");
//     newTask.innerHTML = todo.title;
//     div.appendChild(newTask)
//     div.appendChild(button)
//     return div;
// }

// function render (){
//     document.querySelector("#todo").innerHTML = "";
//     for(let i =0;i<todo.length;i++){
//         const element = createTaskComponent(todo[i],i);
//         const olel = document.querySelector('ol').appendChild(element);
//        document.querySelector("body").appendChild( 
//          document.querySelector("main").appendChild(
//             document.querySelector("#box").appendChild(olel)));
        
//     }
// }
let todo = [];

function addtask() {
    const input = document.querySelector("input");
    if (input.value.trim() === "") return;

    todo.push({
        title: input.value
    });

    input.value = "";
    render();
}

function deleteTask(index) {
    todo.splice(index, 1);
    render();
}
function editTask(index){
    
}

function createTaskComponent(task, index) {
    const div = document.createElement("div");
    const li = document.createElement("li");
    const button = document.createElement("button");
    div.style.display="flex";
    div.style.margin = "15px";
    div.style.margin = "1"
    li.innerText = task.title;
    li.style.marginTop = "5px";
    button.style.marginLeft = "29px";
    button.innerText = "Delete";
    button.style.backgroundColor = "gray";

    button.onclick = () => deleteTask(index);

    div.appendChild(li);
    div.appendChild(button);

    return div;
}

function render() {
    const list = document.querySelector("#list");
    list.innerHTML = "";

    for (let i = 0; i < todo.length; i++) {
        const element = createTaskComponent(todo[i], i);
        list.appendChild(element);
    }
}
