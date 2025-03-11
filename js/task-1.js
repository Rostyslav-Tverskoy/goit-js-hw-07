const category = document.querySelectorAll("#categories .item");
console.log("Number of categories: " + category.length);
category.forEach(item => {
    const title = item.querySelector("h2").textContent;
    const list = item.querySelectorAll("li").length;
    console.log("Category: " + title);
    console.log("Elements: " + list);
    
})







