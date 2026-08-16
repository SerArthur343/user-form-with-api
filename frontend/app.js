const userForm = document.querySelector("#userForm");



userForm.addEventListener("submit", async(e) => {

    e.preventDefault();

    const userName = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
    const email = document.querySelector("#email").value;

    const response = await fetch("http://localhost:3000/users", {

    method: "POST",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify({
        userName,
        password,
        email
    }),

  });

  const data = await response.json();
  console.log(response.status);
  console.log(data);

  if (response.ok) {
    userForm.reset(); 
  }

});



