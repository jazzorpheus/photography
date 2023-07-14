const submitForm = document.querySelector(".submit-form");
const form = document.querySelector(".form-container");
const letterImg = document.querySelector("img");
const body = document.querySelector("body");

const p = document.createElement("p");
p.style.visibility = "hidden";
p.innerText = "Thanks for your message!";

// submitForm.style.color = "red";

submitForm.addEventListener("click", () => {
  form.style.visibility = "hidden";
  letterImg.style.transform = "translate(50vw)";
  body.appendChild(p);
  p.style.position = "relative";
  p.style.top = "-40vh";
  p.style.left = "20vw";
  p.style.visibility = "visible";
  p.style.opacity = "1";
});
