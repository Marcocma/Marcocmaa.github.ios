const pass = document.getElementById("pass");
const icon = document.getElementById("icon");
icon.addEventListener("click", e =>{
    if(pass.type === "password"){
        pass.type = "text"
        icon.classList.remove("bx-show-alt")
        icon.classList.add("bx-hide")
      } else if( pass.type === "text"){
        pass.type = "password"
        icon.classList.remove("bx-hide")
        icon.classList.add("bx-show-alt")
      }
})

  