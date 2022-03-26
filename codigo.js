let tablaRegistro=[
    {nombre:"Juan", apellido:"Perez", codigo:01, celular:300920993},
    {nombre:"Sara", apellido:"Sanchez", codigo:02, celular:300920993},
    {nombre:"Laura", apellido:"Rodriguez", codigo:03, celular:300920993},
    {nombre:"Luis", apellido:"Paez", codigo:04, celular:300920993},
    {nombre:"Vanesa", apellido:"Martinez", codigo:05, celular:300920993},
    {nombre:"Alexander", apellido:"Rodriguez", codigo:06, celular:300920993}
]
function listar(){
    let registro=document.getElementById("Body");
    let newTable="";
    for (let index = 0; index<tablaRegistro.length; index++) {
        newTable+=`<tr>
        <td>${tablaRegistro[index].nombre}</td>
        <td>${tablaRegistro[index].apellido}</td>
        <td>${tablaRegistro[index].codigo}</td>
        <td>${tablaRegistro[index].celular}</td>
        </tr>`;
    }
    registro.innerHTML=newTable;
}
function registrar(){
    let newName=document.getElementById("name").value
    let newLastname=document.getElementById("lastname").value
    let newId=document.getElementById("id").value
    let newCell=document.getElementById("cell").value
    let elemento=document.getElementById("Body")
    var confirmar= false;
    if (newName.length==0 || newLastname.length==0 || newId==0 || newCell==0) {
        alert("Diligencia todos los campos.")
    } else{
        for (let index = 0; index < tablaRegistro.length; index++) {
            if (newId==tablaRegistro[index].codigo) {
                confirmar=true;
            }
        }
        if (confirmar==true) {
            alert("Codigo ya resgistrado.")
        }else{
           elemento.innerHTML+=`<tr><td>${newName}</td><td>${newLastname}</td><td>${newId}</td><td>${newCell}</td></tr>`
           let nuevo={
            nombre: newName,
            apellido: newLastname,
            codigo: newId,
            celular: newCell
        }
        tablaRegistro.push(nuevo)
        }
        
    }
}