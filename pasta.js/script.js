let tema=document.querySelector("#tema")
let button_tema=document.querySelector("#tema i")

let button_menu=document.querySelector("#button_menu")
let button_fecha=document.querySelector("#button_fecha")
let items=document.querySelectorAll("#items a")
let menu=document.querySelector("#menu")
let section_mob=document.querySelector("#menu_mob")






tema.addEventListener("click",tema_noite)


function tema_noite(){
    button_tema.style.marginLeft="35px"
    setTimeout(() => {
        document.body.style.background="rgb(19, 4, 32)"
        section_mob.style.background="rgb(19, 4, 32)"
        button_tema.classList.remove("fa-moon-o")
        button_tema.classList.add("fa-sun-o")

    }, 300);
    tema.removeEventListener("click" ,tema_noite)
    tema.addEventListener("click",tema_dia)
}

function tema_dia(){
    button_tema.style.marginLeft="0px"
    setTimeout(() => {
        document.body.style.background="white"
        section_mob.style.background="white"
        button_tema.classList.remove("fa-sun-o")
        button_tema.classList.add("fa-moon-o")
    }, 300);
    tema.addEventListener("click" ,tema_noite)
    tema.removeEventListener("click",tema_dia)
}







function menu_mob(){
    button_menu.addEventListener("click", chamarMenu)
    button_fecha.addEventListener("click", removerMenu)

    function chamarMenu(){
        menu.style.transform="translateX(0%)"

    }

    function removerMenu(){
        menu.style.transform="translateX(-150%)"
    }
      


    for (const iterator of items) {
        iterator.addEventListener("click" , ()=>{
            if (window.innerWidth <=1350){
                removerMenu()
            }
            
        })
        
    }


    
}

menu_mob()


