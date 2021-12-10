
var mainBox = document.getElementById("mainBox");
function addItem(){
    var titleInp = document.getElementById("titleInp")
    var textInp = document.getElementById("textInp")
    if(textInp.value.length > 2 && titleInp.value.length > 2){
        box = document.createElement("div");
        box.setAttribute("class" , "myBox animate__animated animate__fadeInDown")

        var section = document.createElement("section");
        section.setAttribute("class", "list");
        box.appendChild(section);
         

        var h4 = document.createElement("h5")
        var h4txt = document.createTextNode(titleInp.value)
        h4.appendChild(h4txt)
        section.appendChild(h4)  
        


        p = document.createElement("p")
        var paraTxt = document.createTextNode(textInp.value)
        p.appendChild(paraTxt)
        section.appendChild(p)


        h6 = document.createElement("h6")
        h6.innerHTML = "<i onclick='dlt(this)' class = 'fas fa-minus-circle'></i><i onclick = 'edit(this)' class = 'fas fa-edit'></i>"
        section.appendChild(h6)


        mainBox.appendChild(box)
        textInp.value = "";
        titleInp.value = "";
    }else{
        alert("Enter Value!")
    }
}

function dltAll(){
    mainBox.innerHTML = "";
}

function dlt(e){
    e.parentNode.parentNode.parentNode.remove()
}
function edit(e){
    val1 = e.parentNode.parentNode.firstChild.innerHTML;
    var editTitle = prompt("Edit Title !" , val1)
    e.parentNode.parentNode.firstChild.innerHTML = editTitle
    var val2 = e.parentNode.parentNode.firstChild.nextSibling.innerHTML;
    var editText = prompt("Edit Description", val2);
    e.parentNode.parentNode.firstChild.nextSibling.innerHTML = editText;
}