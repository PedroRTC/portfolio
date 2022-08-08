

let form=document.querySelector("form")
let input_nome=document.querySelector("#nome")
let input_email=document.querySelector("#email")
let textArea=document.querySelector("#mensagem")

let label_nome=document.querySelector("#label_nome")
let label_email=document.querySelector("#label_email")
let label_mensagem=document.querySelector("#label_mensagem")


let enviar=document.querySelector("#enviar")







input_nome.addEventListener("keyup", () => {
    if (input_nome.value.length <= 2) {
         label_nome.innerHTML="*Nome invalido"
         label_nome.style.color="rgb(255, 128, 128)"
         
        
     }else{
        label_nome.innerHTML="Seu nome"
        label_nome.style.color=""
     }

    })


    input_email.addEventListener("keyup", () => {
        if (input_email.value.includes("@") && input_email.value.length >=12) {
             label_email.innerHTML="Seu email"
             label_email.style.color=""
             invalid=false
         }else{
            label_email.innerHTML="*Email invalido"
            label_email.style.color="rgb(255, 128, 128)"
            
         }
    
        })


        textArea.addEventListener("keyup", () => {
            if (textArea.value.length < 3) {
                 label_mensagem.innerHTML="* Mensagem invalida"
                 label_mensagem.style.color="rgb(255, 128, 128)"
                 
        
             }else{
                label_mensagem.innerHTML="Mensagem"
                 label_mensagem.style.color=""
                
             }
        
            })
       




form.addEventListener("submit",enviar_mensagem)


function enviar_mensagem(evt){
  evt.preventDefault()
   
    if (input_nome.value.length == 0){
        label_nome.textContent="* Obrigatorio"
        label_nome.style.color="orange"
        input_nome.focus()


    }else if (input_email.value.length == 0) {

        label_email.textContent="* Obrigatorio"
        label_email.style.color="orange"
        input_email.focus()


    }else if(textArea.value.length==0){ 

        label_mensagem.textContent="* Obrigatorio"
        label_mensagem.style.color="orange"
        textArea.focus()

    }else if(input_nome.value.length <= 2 || textArea.value.length < 3 || !input_email.value.includes("@") ||  !input_email.value.length >=12){  
            
    
    }else{
        enviar.style.opacity="0.5"
        enviar.innerHTML=`<i class="fa fa-spinner fa-pulse fa-1x fa-fw"></i> Enviando...`
    
        let div_confir=document.createElement("div")
        let mensagem_confir=document.createElement("p")
    
        div_confir.classList.add("div_confir")
        mensagem_confir.classList.add("mensagem_confir")
        mensagem_confir.innerHTML=`<i class="fa fa-check-circle" aria-hidden="true"></i> Mensagem enviada com sucesso!<span class="x">X</span>`
        div_confir.appendChild(mensagem_confir)
        window.document.body.appendChild(div_confir)
        setTimeout(() => {
            enviar.style.opacity="1"
            mensagem_confir.style.transform="translateX(0%)"
            enviar.innerHTML=`<i class="fa fa-check-square-o" aria-hidden="true"></i> Enviado`
        }, 5000);

        setTimeout(() => {
          form.submit()
        }, 7000);

        

        
        let x = document.querySelector(".x") 
        x.addEventListener("click", ()=>{
            window.document.body.removeChild(div_confir)
        })
     

 
 
    }
        
  

}