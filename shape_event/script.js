
 //for square 1//
let s1 = document.getElementById("sq1");
s1.addEventListener("mouseenter",function(){
   let r = Math.floor(Math.random() * 100);
   s1.innerHTML = `<h1>${r}</h1>`;

})

s1.addEventListener("mouseleave",function(){
    s1.innerHTML = `<h1>1</h1>`;
})  

//for square 2 //
// on each hovering color changes ,total 3 color//
let clr = "green"
let s2 = document.getElementById("sq2");
s1.addEventListener("mouseenter",function(){
    if(clr =="green")   {
        s2.style.backgroundColor = "green";
        clr= "red" }
    else if(clr=="red"){
        s2.style.backgroundColor = "red" ;
        clr= "blue";
          }
    else{
        s2.style.backgroundColor = "blue";
        clr = "green";
    }

})

s2.addEventListener("mouseleave",function(){
   s2.style.backgroundColor = "white";
})  

