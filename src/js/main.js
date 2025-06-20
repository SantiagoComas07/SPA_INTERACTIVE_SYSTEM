const userName=document.getElementById("name")
const userAge=document.getElementById("age")
const btn = document.getElementById("enviar")
const box_consult = document.getElementById("box-consult")
const box_consult_back= document.getElementById("box-back")
const result= document.getElementById("result")
const box_datas = document.getElementById("sub-box")
// const box = document.getElementById("consult")
const btn_back = document.getElementById("back")

const resultCourseA=document.getElementById("result_A")
const resultCourseB=document.getElementById("result_B")
const resultCourseC=document.getElementById("result_C")


let message
let answerA
let answerB 
let answerC
let mainFlag
let flag


function identificar(name, age){    

age= parseInt(age);

if (isNaN(age)){
    console.error("Error...Informacion invalida");
    message= `Hola ${name} su información es invalida`
    mainFlag=true

}else if(age >=18){
    message=`Hola ${name}, eres mayor de edad. ¡Preparate para las grandes oportunidades en programación!`
    flag=true
}else{
    message=`Hola ${name}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del codigo!`
    flag=false
}}


function showResultCourses(palabra, palabraA){
    if(mainFlag==true){
      console.error("Insufficient information")
    }else{
        if(flag==true){
            console.warn("TODO EN ORDEN")
            answerA='Desarrollo web avanzado------------------------ Hola mundp'
            answerB='Base de datos con Java--------------------------'
            answerC='Inteligencia artificial con python -------------'
        }else{
            answerA='Fundamentos de programación en python'
            answerB='Aprendiendo a programar en Roblox'
            answerC='Webinar de buenas practicas en ciberseguridad para la vida'

        }


    }


}

// This code line is to ocult the box of consult
box_consult_back.style.display="none"

btn.addEventListener('click', ()=>{
    identificar(userName.value, userAge.value)
    result.textContent= message
    if (mainFlag ==true){
        result.style.color="red"
        result.style.fontWeight="bold"
        }else{
            result.style.color="black"
        }
    box_consult.style.display="none"
    box_consult_back.style.display="block"
    showResultCourses( userAge, flag)
    resultCourseA.textContent=answerA
    resultCourseB.textContent=answerB
    resultCourseC.textContent=answerC

})

btn_back.addEventListener('click', ()=>{
    box_consult.style.display="block"
    box_consult_back.style.display="none"
})
