const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let passwordEl1 = document.querySelector("#password-el1") ;
let passwordEl2 = document.querySelector("#password-el2") ;

function generatePassword(){
    let password1=""; 
let password2="";
    for(let i=0; i<15; i++){
        
        password1+= characters[Math.floor(Math.random()*characters.length)];
        password2+= characters[Math.floor(Math.random()*characters.length)];
        
    }
  //  console.log(password1+" "+password2); 
  passwordEl1.textContent = password1; 

  passwordEl2.textContent = password2; 
  passwordEl1.textcontent = "";
  passwordEl2.textcontent = "";
}


function copyPass1(){
navigator.clipboard.writeText(passwordEl1.innerText)
.then(function(){
    document.querySelector("#copy-btn1").innerText= "Copied"

    setTimeout(function(){
        // alert("Text Copied");
        document.querySelector("#copy-btn1").innerText= "Copy To Clipboard"
    },1000)
    
})
}

function copyPass2(){
    navigator.clipboard.writeText(passwordEl2.innerText)
    .then(function(){
        document.querySelector("#copy-btn2").innerText= "Copied"
    
        setTimeout(function(){
            // alert("Text Copied");
            document.querySelector("#copy-btn2").innerText= "Copy To Clipboard"
        },1000)
        
    })
    }
    
    


