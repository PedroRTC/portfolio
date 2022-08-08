let item_menu=document.querySelector("#items a")
const item=document.querySelectorAll("[data-anime]")

let html=document.querySelector(".html")
let css=document.querySelector(".css")
let js=document.querySelector(".javascript")
let react=document.querySelector(".react")

let equipe=document.querySelector(".equipe")
let comunicacao=document.querySelector(".comunicacao")
let comprometimento=document.querySelector(".compro")

let projeto=document.querySelectorAll(".projeto")
let i_projeto=document.querySelectorAll(".projeto span")





const animeScroll=()=>{
  const windowTop= window.pageYOffset + window.innerHeight * 0.85;

  item.forEach(element=>{

      if(windowTop > element.offsetTop || windowTop == item_menu.offsetTop){
        element.classList.add("animate")
           
      }else{
          element.classList.remove("animate")
        
      }
     
  })
}

animeScroll()


habiliScroll=()=>{
    item.forEach(element=>{
        let windowTop
        if (window.innerWidth >967) {
             windowTop = window.pageYOffset + window.innerHeight * 3;
        }else{
            windowTop = window.pageYOffset + window.innerHeight * 3.50;
        } 


        if(window.innerWidth < 724){
            windowTop = window.pageYOffset + window.innerHeight * 5;
        }

       
            
       
       
        if(windowTop > element.offsetTop || windowTop == item_menu.offsetTop){
          
              html.style.width="80%"
              css.style.width=" 64%"
              js.style.width="51%"
              react.style.width="40%"
              equipe.style.width="95%"
              comunicacao.style.width="90%"
              comprometimento.style.width="100%"
             
        }else{
           
            html.style.width="0%"
            css.style.width="0%"
            js.style.width="0%"
            react.style.width="0%"
            equipe.style.width="0%"
            comunicacao.style.width="0%"
            comprometimento.style.width="0%"
    
        }
       
     
    })
}

habiliScroll()

window.addEventListener("scroll",()=>{
    animeScroll()
})

window.addEventListener("scroll",()=>{
    habiliScroll()
})




function animarPrjeto(){
    for (let index = 0; index < projeto.length; index++) {

        projeto[index].addEventListener("mouseover",()=>{

            i_projeto[index].style.opacity="1"
            i_projeto[index].style.height= "100%"
        })

        projeto[index].addEventListener("mouseleave",()=>{

            i_projeto[index].style.height= "0%"
            i_projeto[index].style.opacity="0"  
        })
        
    }
}

animarPrjeto()