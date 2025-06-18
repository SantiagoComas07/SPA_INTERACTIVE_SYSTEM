const nameUser=document.getElementById("name");
const ageUser=document.getElementById("age");
const btn = document.getElementById("enviar")
const result= document.getElementById("result")
let message

function identificar(name, age){

age= parseInt(age);

if (isNaN(age)){
    console.error("Error...Numero invalido");
    message= `Hola ${name} su información es invalida`
}else if(age >=18){
    message=`Hola ${name}, eres mayor de edad. ¡Preparate para las grandes oportunidades en programación!`

}else{
    message=`Hola ${name}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del codigo!`
}}


btn.addEventListener('click', ()=>{
    identificar(nameUser.value, ageUser.value)
    result.textContent= message



})

