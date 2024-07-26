const admin = document.querySelector(".admin");
let token = localStorage.getItem("x-auth-token");

console.log(token);
function chekToken() {
  if (!token) {
    window.location.replace("/index.html");
  }
}
chekToken();
function logout() {
  localStorage.removeItem("x-auth-token");
  open("/home.html", "_self");
}

function adminInfo() {
  let userData = JSON.parse(localStorage.getItem("user"))
  console.log(userData);
  admin.innerHTML = `
  <img src="${userData.image}" alt="">
  
  <h2>${userData.firstName}</h2>
  

  `;
}
adminInfo()