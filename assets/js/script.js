//variables universales
const btn = document.querySelector("#btn");
const input = document.querySelector("#inputList");
const listaTareas = document.querySelector("#listaTareas");
const cantidadTarea = document.querySelector("#cantidadTareas")
const cantidadRealizada = document.querySelector("#cantidadRealizadas")
let ultimoId = 1 // variable que contiene el primer valor de id

//array
const arrayList = []



//funcion del boton
btn.addEventListener("click",function(){
 
const realizado = false 
const nuevaTarea = {id: ultimoId, nombre: input.value, realizada: realizado}//modelo de objeto que ira dentro de nuestro array
arrayList.push(nuevaTarea)//metodo que agrega un nuevo objeto al array
input.value=""

cicloLista()
ultimoId++; //variable aumentada a +1 por el ++

})
/* console.log(arrayList) */

const cicloLista = function(){
    //template para dibujar en html
    let html = `
<thead>
    <tr >
        <th>ID</th>
        <th>Tarea</th>
        <th></th>
    </tr>
</thead>
<tbody>`;
//condicion para que aparesca el check
        for (const tarea of arrayList ){
            if(tarea.realizada){
                statusCheck = "checked";
            }
            else{
                statusCheck ="";
            }
    html+= `
    <tr>
      <td>${tarea.id}</td>
      <td>${tarea.nombre}</td>
      <td><input type="checkbox" ${statusCheck} onclick="realizada(${tarea.id})"> <button onclick="borrar(${tarea.id})" class="btn btn-danger">Borrar</button></td>
    </tr>
    `
    }
    html+= `</tbody>`
    listaTareas.innerHTML= html//imprime el template en el index
    cantidadTarea.innerHTML = arrayList.length//imprime cantidad de tareas en el html
    
    const checkFiltrado = arrayList.filter((ele)=> ele.realizada == true);
    cantidadRealizada.innerHTML = checkFiltrado.length
}
//funcion para poder haver que el boton borrar funcione
function borrar(id){
const index = arrayList.findIndex((ele) => ele.id == id) // foma de buscar el index de id con metodo find index
// si el index encontrado es 
if(index >= 0){
arrayList.splice(index, 1) 
cicloLista()
}}
//funcion para poner un id al elemento realizada 
function realizada (id){
    const index = arrayList.findIndex((ele) => ele.id == id)
    //condicion para cambiar de true a false o viceversa el valor de el elemento realizada
if (arrayList[index].realizada == true)
arrayList[index].realiza= false;
else if (arrayList[index].realizada==false)
    arrayList[index].realizada = true;

    cicloLista()
}
