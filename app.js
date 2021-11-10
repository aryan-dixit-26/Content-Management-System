const collapseBtn = document.getElementById("collapse-btn");
const sideBar = document.getElementById("sidebar");
const mainBody = document.getElementById("main-body");
const parent = document.getElementById("parent");
let flag = 1;


function kuch() {
    if (flag) {
      sideBar.style.left = "-14%";
      sideBar.style.transition = "left .5s";
      mainBody.style.width = "100%";
      mainBody.style.transition = ".5s";
      mainBody.style.left = "0%";
      // parent.innerHtml=``
      document.getElementById("expand").style.visibility = "visible";
    }
    else{
      sideBar.style.left = "0%";
      sideBar.style.transition = "left .5s";
      mainBody.style.width = "86%";
      mainBody.style.transition = ".5s";
      mainBody.style.left = "14%";
      // parent.innerHtml=``
      document.getElementById("expand").style.visibility = "hidden";
    }
    flag = flag == 1 ? 0 : 1;
  }

collapseBtn.addEventListener("click", kuch );
document.getElementById('expand').addEventListener('click', kuch)
