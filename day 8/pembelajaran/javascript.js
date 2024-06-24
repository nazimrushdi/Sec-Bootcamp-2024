const h1 = document.querySelector("h1");
// const allH1 = document.querySelectorAll("h1");
const h1ByIdTitle = document.querySelector(".title");
const h1ByClassLogo = document.querySelector("#logo");

// console.log(h1);
// console.log(allH1);
// console.log(h1ByIdTitle);
// console.log(h1ByIdTitle);

console.dir(h1);
console.log(h1.innerText);

console.log(h1.innerText);
h1.innerText = "your account has be hacked";
console.log(h1.innerText);

console.dir(h1ByClassLogo);
h1ByClassLogo.style.backgroundColor = "red";
h1ByClassLogo.style.color = "white";
h1ByClassLogo.style.padding = "10px";
h1ByClassLogo.style.borderRadius = "20px";
h1ByClassLogo.style.textAlign = "center";
