document.addEventListener('DOMContentLoaded', function() {
   
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");


menuIcon.onclick = () => 
{
    menuIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle("active");
}



let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav ul li a");


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");
        console.log(id);
        
        if (top >= offset && top < offset + height) 
        {
            navLinks.forEach(links => 
                {
                links.classList.remove("active");
                document
                    .querySelector("header nav ul li a[href*=" + id + "]")
                    .classList.add("active");
            });
        }
    });
}


});
