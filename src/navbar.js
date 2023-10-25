export function navigationBar() {
  const container = document.getElementById("content");

  const navbar = document.createElement("nav");
  navbar.classList.add("nav");
  container.appendChild(navbar);

  const nav = document.querySelector(".nav");
  const navList = [{ text: "Home" }, { text: "Menu" }, { text: "Contact" }];

  navList.forEach((link) => {
    const navItem = document.createElement("button");
    navItem.classList.add("navButton");
    navItem.textContent = link.text;
    nav.appendChild(navItem);
  });
}
