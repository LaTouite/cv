const insert = (cssSelector1, cssSelector2) => {
  const tel = document.querySelector(cssSelector1);
  const itel = document.querySelector(cssSelector2);
  tel.addEventListener("click", (event) => {
    itel.classList.toggle("d-none");
  });
}

const add = (cssSelector1, cssSelector2, newClass) => {
  const tel = document.querySelector(cssSelector1);
  const itel = document.querySelector(cssSelector2);
  tel.addEventListener("click", (event) => {
    itel.classList.add(newClass);
  });
}

const remove = (cssSelector1, cssSelector2, newClass) => {
  const tel = document.querySelector(cssSelector1);
  const itel = document.querySelector(cssSelector2);
  tel.addEventListener("click", (event) => {
    itel.classList.remove(newClass);
  });
}

if (document.querySelector("#tel")) {
  insert("#tel", "#insert-tel");
};

if (document.querySelector("#email")) {
  insert("#email", "#insert-email");
};

if (document.querySelector("#wagon")) {
  add("#before", "#wagon", "d-none");
  remove("#before", "#avant", "d-none");
  add("#before", "#before", "on");
  remove("#before", "#during", "on");
  add("#before", "#during", "off");
  remove("#before", "#before", "off");
  add("#during", "#avant", "d-none");
  remove("#during", "#wagon", "d-none");
  add("#during", "#during", "on");
  remove("#during", "#before", "on");
  add("#during", "#before", "off");
  remove("#during", "#during", "off");
}

if (document.querySelector("#job1")) {
  add("#next-job1", "#job1", "d-none");
  remove("#next-job1", "#job2", "d-none");
  add("#next-job1", "#next-job1", "d-none");
  remove("#next-job1", "#next-job2", "d-none");
  add("#next-job1", "#previous-job1", "d-none");
  remove("#next-job1", "#previous-job2", "d-none");
  add("#previous-job1", "#job1", "d-none");
  remove("#previous-job1", "#job3", "d-none");
  add("#previous-job1", "#previous-job1", "d-none");
  remove("#previous-job1", "#previous-job3", "d-none");
  add("#previous-job1", "#next-job1", "d-none");
  remove("#previous-job1", "#next-job3", "d-none");
  add("#next-job1", "#job-one-three", "d-none");
  remove("#next-job1", "#job-two-three", "d-none");
  add("#previous-job1", "#job-one-three", "d-none");
  remove("#previous-job1", "#job-three-three", "d-none");
};

if (document.querySelector("#job2")) {
  add("#next-job2", "#job2", "d-none");
  remove("#next-job2", "#job3", "d-none");
  add("#next-job2", "#next-job2", "d-none");
  remove("#next-job2", "#next-job3", "d-none");
  add("#next-job2", "#previous-job2", "d-none");
  remove("#next-job2", "#previous-job3", "d-none");
  add("#previous-job2", "#job2", "d-none");
  remove("#previous-job2", "#job1", "d-none");
  add("#previous-job2", "#previous-job2", "d-none");
  remove("#previous-job2", "#previous-job1", "d-none");
  add("#previous-job2", "#next-job2", "d-none");
  remove("#previous-job2", "#next-job1", "d-none");
  add("#next-job2", "#job-two-three", "d-none");
  remove("#next-job2", "#job-three-three", "d-none");
  add("#previous-job2", "#job-two-three", "d-none");
  remove("#previous-job2", "#job-one-three", "d-none");
};

if (document.querySelector("#job3")) {
  add("#next-job3", "#job3", "d-none");
  remove("#next-job3", "#job1", "d-none");
  add("#next-job3", "#next-job3", "d-none");
  remove("#next-job3", "#next-job1", "d-none");
  add("#next-job3", "#previous-job3", "d-none");
  remove("#next-job3", "#previous-job1", "d-none");
  add("#previous-job3", "#job3", "d-none");
  remove("#previous-job3", "#job2", "d-none");
  add("#previous-job3", "#previous-job3", "d-none");
  remove("#previous-job3", "#previous-job2", "d-none");
  add("#previous-job3", "#next-job3", "d-none");
  remove("#previous-job3", "#next-job2", "d-none");
  add("#next-job3", "#job-three-three", "d-none");
  remove("#next-job3", "#job-one-three", "d-none");
  add("#previous-job3", "#job-three-three", "d-none");
  remove("#previous-job3", "#job-two-three", "d-none");
};

if (document.querySelector("#formation1")) {
  add("#next-formation1", "#formation1", "d-none");
  remove("#next-formation1", "#formation2", "d-none");
  add("#next-formation1", "#next-formation1", "d-none");
  remove("#next-formation1", "#next-formation2", "d-none");
  add("#next-formation1", "#previous-formation1", "d-none");
  remove("#next-formation1", "#previous-formation2", "d-none");
  add("#next-formation1", "#formation-one-four", "d-none");
  remove("#next-formation1", "#formation-two-four", "d-none");
  add("#previous-formation1", "#formation1", "d-none");
  remove("#previous-formation1", "#formation4", "d-none");
  add("#previous-formation1", "#previous-formation1", "d-none");
  remove("#previous-formation1", "#previous-formation4", "d-none");
  add("#previous-formation1", "#next-formation1", "d-none");
  remove("#previous-formation1", "#next-formation4", "d-none");
  add("#previous-formation1", "#formation-one-four", "d-none");
  remove("#previous-formation1", "#formation-four-four", "d-none");
};

if (document.querySelector("#formation2")) {
  add("#next-formation2", "#formation2", "d-none");
  remove("#next-formation2", "#formation3", "d-none");
  add("#next-formation2", "#next-formation2", "d-none");
  remove("#next-formation2", "#next-formation3", "d-none");
  add("#next-formation2", "#previous-formation2", "d-none");
  remove("#next-formation2", "#previous-formation3", "d-none");
  add("#next-formation2", "#formation-two-four", "d-none");
  remove("#next-formation2", "#formation-three-four", "d-none");
  add("#previous-formation2", "#formation2", "d-none");
  remove("#previous-formation2", "#formation1", "d-none");
  add("#previous-formation2", "#previous-formation2", "d-none");
  remove("#previous-formation2", "#previous-formation1", "d-none");
  add("#previous-formation2", "#next-formation2", "d-none");
  remove("#previous-formation2", "#next-formation1", "d-none");
  add("#previous-formation2", "#formation-two-four", "d-none");
  remove("#previous-formation2", "#formation-one-four", "d-none");
};

if (document.querySelector("#formation3")) {
  add("#next-formation3", "#formation3", "d-none");
  remove("#next-formation3", "#formation4", "d-none");
  add("#next-formation3", "#next-formation3", "d-none");
  remove("#next-formation3", "#next-formation4", "d-none");
  add("#next-formation3", "#previous-formation3", "d-none");
  remove("#next-formation3", "#previous-formation4", "d-none");
  add("#next-formation3", "#formation-three-four", "d-none");
  remove("#next-formation3", "#formation-four-four", "d-none");
  add("#previous-formation3", "#formation3", "d-none");
  remove("#previous-formation3", "#formation2", "d-none");
  add("#previous-formation3", "#previous-formation3", "d-none");
  remove("#previous-formation3", "#previous-formation2", "d-none");
  add("#previous-formation3", "#next-formation3", "d-none");
  remove("#previous-formation3", "#next-formation2", "d-none");
  add("#previous-formation3", "#formation-three-four", "d-none");
  remove("#previous-formation3", "#formation-two-four", "d-none");
};

if (document.querySelector("#formation4")) {
  add("#next-formation4", "#formation4", "d-none");
  remove("#next-formation4", "#formation1", "d-none");
  add("#next-formation4", "#next-formation4", "d-none");
  remove("#next-formation4", "#next-formation1", "d-none");
  add("#next-formation4", "#previous-formation4", "d-none");
  remove("#next-formation4", "#previous-formation1", "d-none");
  add("#next-formation4", "#formation-four-four", "d-none");
  remove("#next-formation4", "#formation-one-four", "d-none");
  add("#previous-formation4", "#formation4", "d-none");
  remove("#previous-formation4", "#formation3", "d-none");
  add("#previous-formation4", "#previous-formation4", "d-none");
  remove("#previous-formation4", "#previous-formation3", "d-none");
  add("#previous-formation4", "#next-formation4", "d-none");
  remove("#previous-formation4", "#next-formation3", "d-none");
  add("#previous-formation4", "#formation-four-four", "d-none");
  remove("#previous-formation4", "#formation-three-four", "d-none");
};
