var main = document.getElementById("main");
var s = "";
for(let i=1;i<=52;i++){
    s+= `<div class="card">
    <img src="https://i.pinimg.com/1200x/a8/d4/8a/a8d48a4aee0b62d3a7425545628cd7e8.jpg"></div>`;
}

main.innerHTML = s;