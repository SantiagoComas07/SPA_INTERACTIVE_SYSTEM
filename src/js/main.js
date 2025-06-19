const nameUser=document.getElementById("name")
const ageUser=document.getElementById("age")
const btn = document.getElementById("enviar")
const box_consult = document.getElementById("box-consult")
const box_consult_back= document.getElementById("box-back")
const result= document.getElementById("result")
const box_datas = document.getElementById("sub-box")
// const box = document.getElementById("consult")
const btn_back = document.getElementById("back")

let message


function identificar(name, age){    

age= parseInt(age);

if (isNaN(age)){
    console.error("Error...Informacion invalida");
    message= `Hola ${name} su información es invalida`

}else if(age >=18){
    message=`Hola ${name}, eres mayor de edad. ¡Preparate para las grandes oportunidades en programación!`

}else{
    message=`Hola ${name}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del codigo!`
}}


function showResultCourses(){



}



box_consult_back.style.display="none"








btn.addEventListener('click', ()=>{
    identificar(nameUser.value, ageUser.value)
    result.textContent= message
    box_consult.style.display="none"
    box_consult_back.style.display="block"
})

btn_back.addEventListener('click', ()=>{
    box_consult.style.display="block"
    box_consult_back.style.display="none"
})
