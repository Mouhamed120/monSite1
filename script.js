const nav = document.querySelector(".banner-nav")
const img1 = document.querySelector(".toggle-menu .img1")
const img2 = document.querySelector(".toggle-menu .img2")


img1.onclick = () => {
    img1.style.display = "none"
    img2.style.display = "inline-block"
    nav.style.right = "0"

}

img2.onclick = () => {
    img2.style.display = "none"
    img1.style.display = "inline-block"
    nav.style.right = "-250px"

}
