const menuBtn = document.getElementById("menuBtn");
const navList = document.querySelector("nav");
const contactBtn = document.querySelector(".contact-us-link");

// Clone the nav element
const navClone = navList.cloneNode(true);
const contactBtnClone = contactBtn.cloneNode(true);

const menu = document.createElement("div");
menu.className = "navigationMenu";
menu.append(navClone);
menu.append(contactBtnClone);
menu.insertAdjacentHTML(
  "beforeend",
  `<button class="closeBtn">
    <span class="material-symbols-outlined">close</span>
  </button>`
);
menu.style.display = "none";

document.body.append(menu);

menuBtn.onclick = () => {
  menu.classList.toggle("activeMenu");
  menu.style.display = menu.style.display === "none" ? "block" : "none";
};

const closeBtn = document.querySelector(".closeBtn");

closeBtn.onclick = () => {
  menu.classList.remove("activeMenu");
  menu.style.display = "none";
};
