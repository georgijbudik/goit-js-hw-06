const itemEl = document.querySelectorAll(".item");
const categoryEl = document.querySelector("#categories");
console.log(`Number of categories : `, itemEl.length);
itemEl.forEach((item) => {
  const titleEl = item.querySelector("h2").textContent;
  const countEl = item.querySelectorAll("li").length;
  console.log(`Category: ${titleEl} 
Elements: ${countEl}`);
});
