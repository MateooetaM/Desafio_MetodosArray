
const formulario = document.querySelector('#formulario')
const inputTarea = document.querySelector('#tarea')
const listaTareas = document.querySelector('#lista-tareas')
// const listaId = document.querySelector('#lista-id')

const tareas = []

const renderTareas = ()=> {
    let html = ""
    tareas.forEach((tarea)=> {
        html += /*html*/`
            <li id="${tarea.id}">
                <span>${tarea.id}</span>
                <span class="${tarea.completa ? 'completa' : ''}" >${tarea.texto}</span>
                <input class="completar checkbox" type="checkbox" ${tarea.completa ? 'checked' : ''}>
                <!-- <button class="completar">Completar</button>-->
                <button class="eliminar" >X</button>
                
            </li>`
    })

    listaTareas.innerHTML = html

    completarTareas()
    eliminarTareas()
}

const completarTareas = ()=> {
    const botones = document.querySelectorAll("#lista-tareas .completar")
    botones.forEach((btn)=> {
        btn.addEventListener("click", ()=> {
            const index = tareas.findIndex((elemento)=> elemento.id == btn.parentNode.id)
            // tareas[index].completa = true
            tareas[index].completa = !tareas[index].completa

            renderTareas()
        })
})}

const eliminarTareas = ()=> {
    const botones = document.querySelectorAll("#lista-tareas .eliminar")
    botones.forEach((btn)=> {
        btn.addEventListener("click", ()=> {
            const index = tareas.findIndex((elemento)=> elemento.id == btn.parentNode.id)
            tareas.splice(index, 1)

            renderTareas() 
        })
    })
}

formulario.addEventListener('submit', (event)=> {
    event.preventDefault()

    const nuevaTarea = {
        id: Date.now(),
        texto: inputTarea.value,
        completa: false
    }
    tareas.push(nuevaTarea)
    
    inputTarea.value = ""

    renderTareas()

})