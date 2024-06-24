document.addEventListener("DOMContentLoaded", () => {
  const userList = document.getElementById("userList");
  const userDetails = document.getElementById("userDetails");
  const backButton = document.getElementById("backButton");

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      users.forEach((user) => {
        const li = document.createElement("li");
        li.textContent = user.name;
        li.addEventListener("click", () => showUserDetails(user));
        userList.appendChild(li);
      });
    });

  function showUserDetails(user) {
    userList.style.display = "none";
    backButton.style.display = "block";
    userDetails.style.display = "block";
    userDetails.innerHTML = `
            <h2>${user.name}</h2>
            <p><strong>Username:</strong> ${user.username}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Phone:</strong> ${user.phone}</p>
            <p><strong>Website:</strong> ${user.website}</p>
            <p><strong>Company:</strong> ${user.company.name}</p>
            <p><strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
        `;
  }

  backButton.addEventListener("click", () => {
    userList.style.display = "block";
    backButton.style.display = "none";
    userDetails.style.display = "none";
    userDetails.innerHTML = "";
  });
});
