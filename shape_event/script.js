let s1 = document.getElementById("sq1");
s1.addEventListener("mouseenter",function(){
   let r = Math.floor(Math.random() * 100);
   s1.innerHTML = `<h1>${r}</h1>`;

})

s1.addEventListener("mouseleave",function(){
    s1.innerHTML = `<h1>1</h1>`;
})


