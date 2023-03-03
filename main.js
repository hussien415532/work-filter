let lis = document.querySelectorAll("ul li");
let all = Array.from(document.querySelectorAll(".all"));
let cat = document.querySelector(".category");

lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    e.target.classList.add("active");
    cat.innerHTML = "";
    let chosen = all.filter((el) => {
      return el.classList.contains(e.target.getAttribute("data-"));
    });
    chosen.forEach((img) => {
      cat.append(img);
    });
  });
});
