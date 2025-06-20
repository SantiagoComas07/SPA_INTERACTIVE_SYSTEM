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
    message=`Hello ${name}, You're of legal age. Take advantage of great opportunities with our professional courses!`
    flag=true
}else{
    message=`Hello ${name}, You're a minor. Start with the basics!`
    flag=false
}}


function showResultCourses(palabra, palabraA){
    if(mainFlag==true){
      console.error("Insufficient information")
    }else{
        if(flag==true){
            console.warn("TODO EN ORDEN")
            answerA='React Developer Essentials'
            answerB='Cloud Certified Foundations'
            answerC='Introduction to Artificial Intelligence: Learn to Think Like a Machine'
        }else{
            answerA='HTML: Build the Structure of the Web'
            answerB='Smart Web Navigation: Master the Internet Safely and Efficiently'
            answerC='Python Programming: From Zero to Backend Developer'

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
