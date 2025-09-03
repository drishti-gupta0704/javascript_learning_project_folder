
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
s2.addEventListener("mouseenter",function(){
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

// square 3 generates  any random color on hovering //
// rgb(a,b,c) where a,b,c lies between 0-255 //

let s3 = document.getElementById("sq3");
s3.addEventListener("mouseenter",function(){
    let r1 = Math.floor(Math.random() * 256); // 256 is excluded
    let r2 = Math.floor(Math.random() * 256);
    let r3 = Math.floor(Math.random() * 256);
    s3.style.backgroundColor= `rgb(${r1},${r2},${r3})`;


})

s3.addEventListener("mouseleave",function(){
    s3.style.backgroundColor="white";
})  

// square 4 //
// on clicking square 4 , square 1,2,3 genarates random color //

let s4 = document.getElementById("sq4");
s4.addEventListener("click",function(){
    s1.style.backgroundColor = "red";
    s2.style.backgroundColor = "green";
    s3.style.backgroundColor = "blue";
})

s4.addEventListener("mouseleave",function(){
    s1.style.backgroundColor="white";
    s2.style.backgroundColor="white";
    s3.style.backgroundColor="white";
})  