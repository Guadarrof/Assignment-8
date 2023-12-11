let tycCheckbox=document.getElementById("tyc");
let newsCheckbox=document.getElementById("news");
let resetBtn=document.getElementById("reset");
let inputs=document.getElementsByTagName("input");
let nationalitySelect=document.getElementById("nationality");
let swapCssBtn=document.getElementsByClassName("swapCss");
let swapBtnText=document.getElementById("nextStyleTxt");
let randomCssBtn=document.getElementsByClassName("randomCss");
let randomBtnText=document.getElementById("randomStyleTxt");
let cssStyle=document.getElementsByClassName("estilos");
let titulo=document.getElementsByTagName("h1");
let legends=document.getElementsByTagName("legend");
let textArea=document.getElementsByTagName("textarea"); 

console.log(nationalitySelect)
//Automatic news checkbox

tycCheckbox.addEventListener("click",checkNews);

function checkNews(){
    if(tycCheckbox.checked){
        newsCheckbox.checked=true
    }
}

//Add hidden label to buttons

swapCssBtn[0].addEventListener("mouseover", swapBtnLabel)

function swapBtnLabel(){
    if(swapBtnText.style.display==="none"){
    swapBtnText.style.display="block";
    } else{
        swapBtnText.style.display="none"
    }
}

randomCssBtn[0].addEventListener("mouseover", randomBtnLabel)

function randomBtnLabel(){
     if(randomBtnText.style.display==="none"){
        randomBtnText.style.display="block"
     }else{
        randomBtnText.style.display="none"
        }
}

// Resetting forms

//No es necesario el input type=reset resetea solo!!

// resetBtn.addEventListener("click", resetForm);

//  function resetForm(){
//     for (let i = 0; i < inputs.length; i++) {
//         if(inputs[i].type==="text"){
//             inputs[i].value="";
//         }  
//         else if(inputs[i].type==="checkbox"){
//             inputs[i].checked=false;
//         }
//         else if(inputs[i].type==="tel"){
//             inputs[i].value="";
//         }
//         else if(inputs[i].type==="email"){
//             inputs[i].value="";
//         }
//         else{
//             inputs[i].checked=false;
//         }
//     }
//     for (let index = 0; index < textArea.length; index++) {
//         textArea[index].value="";        
//     }
//     nationalitySelect.value="none";
// }

// Swapping CSS

swapCssBtn[0].addEventListener("click", cssSwap);
let currentStyle=0;

function cssSwap(){
    currentStyle+=1;
    for (let c = 0; c <=2; c++) {
        if (currentStyle === 1) {
            cssStyle[0].href = "/Css/style-2.css";
            titulo[0].innerText="Veni al gym";
            legends[0].innerText="Datos Personales";
            legends[1].innerText="Datos de contacto";
            legends[2].innerText="Actividades";
        } else if(currentStyle===2){
            cssStyle[0].href = "/Css/style-3.css";
            titulo[0].innerText="Veni al gym";
            legends[0].innerText="Datos Personales";
            legends[1].innerText="Datos de contacto";
            legends[2].innerText="Actividades";
        }else{
            cssStyle[0].href = "/Css/style-1.css";
            titulo[0].innerText="Veni al gym 💪🏽";
            legends[0].innerText="🙋 Datos Personales 👀";
            legends[1].innerText="📱 Datos de contacto 💌";
            legends[2].innerText="🚴 Actividades 🤸";
        }
    
}
if(currentStyle===3){
    currentStyle=0;
}
}


randomCssBtn[0].addEventListener("click", cssRandom);
function cssRandom(){
    currentStyle = Math.floor(Math.random() * 3);
    cssSwap();  
}