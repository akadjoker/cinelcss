
let isPressed= false;
let doAnimate = false;
 

document.addEventListener('DOMContentLoaded', function() {
   
    let menuIcon = document.querySelector("#menu-icon");
    let navbar = document.querySelector(".navbar");
    let isActive = false; 
    
    menuIcon.onclick = () => 
    {
      
        menuIcon.classList.toggle("fa-xmark");
  
        if (!isActive) 
        {
          navbar.classList.add("active");
          navbar.classList.remove("hidden");
          isActive = true;
      } else 
      {
         // navbar.classList.remove("active");
          navbar.classList.add("hidden");
          isActive = false;
      }

    
    }

    document.addEventListener('click', function(event) 
    {
      if (!menuIcon.checkVisibility()) 
      {
        return;
      }
      
        if (!navbar.contains(event.target) && !menuIcon.contains(event.target)) 
        {
          
          
          //   navbar.classList.remove("active");
              navbar.classList.add("hidden");
              menuIcon.classList.remove("fa-xmark");
              isActive = false;
        }
        if (navbar.contains(event.target)) 
        {
          
          
          //   navbar.classList.remove("active");
              navbar.classList.add("hidden");
              menuIcon.classList.remove("fa-xmark");
              isActive = false;
        }
  });

    navbar.addEventListener('mouseover', () => 
    {
     
    });


    navbar.addEventListener('mouseout', () => 
    {

    });


    navbar.addEventListener('transitionend', function(event) 
    {
      
     
  });

 });
