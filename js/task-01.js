const itemEl = document.querySelectorAll(".item");
const categoryEl = document.querySelector("#categories");
console.log(`Number of categories : `, itemEl.length);
itemEl.forEach((item) => {
  const titleEl = item.firstElementChild.textContent;
  const countEl = item.lastElementChild.querySelectorAll("li");
  console.log(`Category: ${titleEl} 
Elements: ${countEl.length}`);
});
