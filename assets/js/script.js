let btn = document.getElementById("addBtn");
let input = document.getElementById("TextInput");
let list = document.getElementById("itemList");


btn.addEventListener("click", function(){
    let value = input.value;
    if (value=="") {
        alert("empty!!!")
        return;
    }

    let li = document.createElement("li");
    let icon = document.createElement("i");
    //<i class="fa-regular fa-rectangle-xmark"></i>
    icon.classList.add("fa-regular", "fa-rectangle-xmark");
    icon.style.cursor = "pointer";
    li.classList.add("list-group-item");
    li.style.cursor = "pointer";
    li.innerText = value.trim();
    list.appendChild(li);
    list.appendChild(icon);
    input.value="";

    icon.onclick=()=>{
        li.remove();
        icon.remove();
    }

    
})
