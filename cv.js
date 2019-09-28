const insert = (cssSelector1, cssSelector2) => {
  const tel = document.querySelector(cssSelector1);
  const itel = document.querySelector(cssSelector2);
  tel.addEventListener("click", (event) => {
    itel.classList.toggle("d-none");
  });
}

if (document.querySelector("#tel")) {
  insert("#tel", "#insert-tel");
};

if (document.querySelector("#email")) {
  insert("#email", "#insert-email");
};

// const insert = (cssSelector1, cssSelector2, text) => {
//   const tel = document.querySelector(cssSelector1);
//   const insertTel = document.querySelector(cssSelector2);
//   tel.addEventListener("click", (event) => {
//     insertTel.insertAdjacentHTML("beforeend", text);
//   });
// };

// if (document.querySelector("#tel")) {
//   insert("#tel", "#insert-tel", "06 84 04 84 85");
// };

// if (document.querySelector("#email")) {
//   insert("#email", "#insert-email", "david.touitou.dev@gmail.com");
// };
