//function for the nav bar
window.onscroll = function() {myFunction()};
//navbar
var navbar = document.getElementById("navbar");
//offset pisition of the navbar
var sticky = navbar.offsetTop;
//this function adds "sticky" when it reaches the top/scroll psoition, and reverse
function myFunction() {
    if(window.pageYOffset >= sticky){
        navbar.classList.add("sticky")
    }else{
        navbar.classList.remove("sticky");
    }
}


//function for collpsible
var coll = document.getElementsByClassName("coll");
var i;

for(i=0; i < coll.length; i++){
    coll[i].addEventListener("click", function(){
        this.classList.toggle("active");
        var content = this.nextElementSibling;
if(content.style.display === "block"){
    content.style.display = "none";
}else{
    content.style.display = "block";
}

    });
}