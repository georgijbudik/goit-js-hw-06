const itemEl = document.querySelectorAll(".item");
console.log(`Number of categories : `, itemEl.length);
itemEl.forEach((item) => {
  const titleEl = item.firstElementChild.textContent;
  const countEl = item.lastElementChild.children;
  console.log(`Category: ${titleEl} 
Elements: ${countEl.length}`);
});
