let main = document.getElementById("main");
let arr = ["https://i.pinimg.com/1200x/a8/d4/8a/a8d48a4aee0b62d3a7425545628cd7e8.jpg","https://i.pinimg.com/1200x/dd/e6/0b/dde60b62cacb027ac65f47ab32ed935f.jpg","https://i.pinimg.com/736x/99/eb/41/99eb410986c35f4bd9401c0cc2f5d54d.jpg", "https://i.pinimg.com/736x/57/eb/5d/57eb5dc9b9f971fa6f9aa0f746f3e843.jpg","https://i.pinimg.com/736x/b3/64/d4/b364d4151853d8eee15ca5339c875f3e.jpg","https://i.pinimg.com/736x/53/5b/4f/535b4f4b69dfeeb80f78c532bc895523.jpg"];
let s = "";
for(let i=1;i<=52;i++){
   let r= Math.floor(Math.random()*arr.length);
   s += `<div class = "card"><img src = ${arr[r]}></div>`;

}
    
main.innerHTML = s;
