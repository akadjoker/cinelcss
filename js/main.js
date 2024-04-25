
let isPressed= false;
let doAnimate = false;


document.addEventListener('DOMContentLoaded', function() {
   
    let menuIcon = document.querySelector("#menu-icon");
    let navbar = document.querySelector(".navbar");
    
    
    menuIcon.onclick = () => 
    {
      
        menuIcon.classList.toggle("fa-xmark");
        navbar.classList.toggle("active");
        console.log("doom clicked");
        doAnimate = true;
        isPressed=true;
    
    }

    navbar.addEventListener('mouseover', () => 
    {
     
    });


    navbar.addEventListener('mouseout', () => 
    {
      if(isPressed)
      {
        isPressed    = false;
        menuIcon.classList.toggle("fa-xmark");
      }
        navbar.classList.toggle("active");
        navbar.classList.add("show");
    });
    // setTimeout(() => 
    // {
    //     navbar.classList.add("hidden");
    //     menuIcon.classList.toggle("fa-xmark");
    //     isPressed    = false;
   
     
    // }, 3000);

 

 });
