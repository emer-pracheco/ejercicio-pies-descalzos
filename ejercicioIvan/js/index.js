const formulario =document.getElementById("formulario");
const estudiantes = []
const container =document.getElementById("container");
const insertar =document.getElementById("enviar");


function accion(e) {
    e.preventDefault();
    const nombre =document.getElementById("nombres").value;
    const apellido =document.getElementById("apellidos").value;
    const curso =document.getElementById("cursos").value;
    const edad =document.getElementById("edad").value;
    const sexo =document.getElementById("sexo").value;
    const civil =document.getElementById("civil").value;
    const ubicacion =document.getElementById("ubicacion").value;

 let estudiante ={
    nombre: nombre,
    apellido: apellido,
    edad: edad,
    curso: curso,
    sexo: sexo,
    civil: civil,
    ubicacion: ubicacion,
    poblacion: poblacion
 }   
 estudiantes.push(estudiante);
 if (estudiantes.length >=1){
    var mayores = 0;
    var femenino=0;
    var masculino=0;
    var vulnerable=0;
    var playa=0;
    var malambo=0;
    var galapa=0;
    var barranquilla=0;
    var sexto=0;
    var septimo=0;
    var octavo=0;
    var noveno=0;
    var decimo=0;
    var once=0;

    for (let i = 0; i < estudiantes.length; i++) {
        const element = estudiantes[i];
        if (element.edad>=18) {
            mayores++
        }
        if (element.sexo==1) {
            masculino++
        }else{
            femenino++
        }
        if (element.ubicacion==1) {
            playa++
        }
        if (element.ubicacion==2) {
            malambo++
        }
        if (element.ubicacion==3) {
            barranquilla++
        }
        if (element.ubicacion==4) {
            galapa++
        }
        if (element.curso==6 ){
            sexto++
        }
        if (element.curso==7 ){
            septimo++
        }
        if (element.curso==8 ){
            octavo++
        }
        if (element.curso==9 ){
            noveno++
        }
        if (element.curso==10 ){
            decimo++
        }
        if (element.curso==11 ){
            once++
        }
    }

    container.innerHTML="<p>Cantidad de estudiantes: "+estudiantes.length+"</p>"
    container.innerHTML+="<p>Cantidad estudiantes mayores de edad: "+mayores+"</p>"
    container.innerHTML+="<p>Cantidad estudiantes femeninos: "+femenino+"</p>"
    container.innerHTML+="<p>Cantidad estudiantes masculino: "+masculino+"</p>"
    container.innerHTML+="<p>Cantidad estudiantes que viven en la playa: "+playa+"</p>"
    container.innerHTML+="<p>Cantidad estudiantes que viven en malambo: "+malambo+"</p>"
    container.innerHTML+="<p>Cantidad estudiantes que viven en barranquilla: "+barranquilla+"</p>"
    container.innerHTML+="<p>Cantidad estudiantes que viven en galapa: "+galapa+"</p>"
    container.innerHTML+="<p>Cantidad estudiantes que estan sexto: "+sexto+"</p>"
    container.innerHTML+="<p>Cantidad septimo que estan septimo: "+septimo+"</p>"
    container.innerHTML+="<p>Cantidad estudiantes que estan octavo: "+octavo+"</p>"
    container.innerHTML+="<p>Cantidad estudiantes que estan noveno: "+noveno+"</p>"
    container.innerHTML+="<p>Cantidad estudiantes que estan decimo: "+decimo+"</p>"
    container.innerHTML+="<p>Cantidad estudiantes que estan once: "+once+"</p>"






}
}
formulario.onsubmit=accion