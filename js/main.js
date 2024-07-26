const form = document.querySelector(".form");
const inpUsername = document.querySelector(".username");
const inpPassword = document.querySelector(".password");
const API_URL = "'https://dummyjson.com";

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let user = {
    username: inpUsername.value,
    password: inpPassword.value,
  };

  let response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  response.json().then((res) => {
    if (res.token) {
      localStorage.setItem('user',JSON.stringify(res))
       localStorage.setItem("x-auth-token", res.token)
       open("/admin.html", "_self")
      console.log(res.token);
    } else {
      alert("username or password is incorrect");
    }
  });
});
