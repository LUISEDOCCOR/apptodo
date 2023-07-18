let newtask = document.getElementById("newtask")
let contenedor = document.getElementById("contenedor")
let divalert = document.getElementById("divalert")
let divnotask= document.getElementById("notask")
let cards = ""
const hoy = new Date()

class Task {
    constructor(task){
        this.task = task
        this.name =  hoy.toDateString()
    }
}

let arraytask =[]
function newTask(){
    if(newtask.value == ""){
        divalert.innerHTML =`
            <div class="alert alert-danger" role="alert">
                Rellene todos los campos
            </div>
        `
    }else{
        divalert.innerHTML = ""
        arraytask.push((new Task(newtask.value)))
        newtask.value = ""
    }
    contenedor.innerHTML = ""

    for(var i in arraytask){
        cards += `
        <div class="card mb-3" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Date: <b>${arraytask[i].name}</b></h5>
                <p class="card-text">${arraytask[i].task}</p>
                <div class="d-flex flex-wrap gap-2">
                    <a class="btn btn-danger" onclick = "eliminar(${i})">Remove</a>
                    <a class="btn btn-success" onclick = "eliminar(${i})">To complete</a>
                </div>
            </div>
      </div>`    

    }
    
    let div = document.createElement("DIV")
    div.innerHTML = cards
    contenedor.appendChild(div)
    cards = ""
}





