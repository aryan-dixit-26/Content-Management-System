const collapseBtn = document.getElementById("collapse-btn")
const sideBar = document.getElementById("sidebar")
const mainBody = document.getElementById("main-body")
const parent = document.getElementById("parent")
let flag = 0
collapseBtn.addEventListener("click", function(){
    
    sideBar.style.left="-14%"
    sideBar.style.transition="left .5s"
    mainBody.style.width="100%"
    mainBody.style.transition=".5s"
    mainBody.style.left="0%"
    parent.innerHtml=``

})

