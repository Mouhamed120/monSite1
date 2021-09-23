const menuBtn = document.getElementById("menuBtn")
const sideNav = document.getElementById("sideNav")
const menu = document.getElementById("menu")

menu.addEventListener("click" , () =>{
    if(sideNav.style.right === "-250px"){
        
        // afficher le menu
        menu.src = "./images/close.png"
        sideNav.style.right = "0"
    }else{
        menu.src = "./images/menu.png"
        sideNav.style.right = "-250px"


    }



})



