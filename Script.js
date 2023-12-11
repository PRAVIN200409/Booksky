var popoverlay=document.querySelector(".overlay");

var popbackgnd=document.querySelector(".box");

var plusbutton=document.getElementById("popup");

plusbutton.addEventListener("click",function()
{
    popoverlay.style.display="block"
    popbackgnd.style.display="block"
})

var cancelbutton=document.getElementById("cancelpopup")

cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    popoverlay.style.display="none"
    popbackgnd.style.display="none"

})

var container=document.querySelector(".container")
var addbook=document.getElementById("addbook")
var booktitleinput=document.getElementById("booktitle")
var bookauthorinput=document.getElementById("bookauthor")
var bookdescriptioninput=document.getElementById("bookdescription")

addbook.addEventListener("click",function(event)
{

    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","bookcontainer")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
    <h5>${bookauthorinput.value}</h5>
    <p>
    ${bookdescriptioninput.value}
    </p>
    <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popoverlay.style.display="none"
    popbackgnd.style.display="none"
    bookauthorinput.value=""
    booktitleinput.value=""
    bookdescriptioninput.value=""
    
})

function deletebook(event){
    event.target.parentElement.remove()
}