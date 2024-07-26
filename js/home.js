const link = document.querySelector(".link")
function checkLink(){
    let token = localStorage.getItem("x-auth-token");
    if(token){
        link.textContent="Admin"
        link.setAttribute("href", "./peges/admin.html");
    }else{
        link.textContent= "Login"
        link.href = "./home.html";
    }
}