let cvButton = document.querySelector(".cv");
let cvLink = document.querySelector(".cv a");
cvButton.addEventListener("mouseover", function() {
    cvLink.style.color = "#AFEB8F";
});

cvButton.addEventListener("mouseout", function() {
    cvLink.style.color = "black";
});

function changeText() {
    let role = document.querySelector(".animation");
    const webdev = 'Front End Web Dev';
    const itGuy = 'Your Average IT Guy.';
    role.classList.add('fade-out'); //added

    if (role.innerHTML === "IT Specialist") {
        //role.innerHTML = webdev;
        
        setTimeout(() => {
            role.innerHTML = webdev;
            role.classList.remove('fade-out'); 
          }, 500);

    } else if (role.innerHTML === webdev) {
        //role.innerHTML = itGuy;

        setTimeout(() => {
            role.innerHTML = itGuy;
            role.classList.remove('fade-out'); 
          }, 500);

    } else {
        //role.innerHTML = "IT Specialist";

        setTimeout(() => {
            role.innerHTML = "IT Specialist";
            role.classList.remove('fade-out'); 
          }, 500);

    }
    
}

  setInterval(changeText, 2000);

  window.addEventListener('scroll', reveal);
  
  function reveal() {
    let reveals = document.querySelectorAll('.reveal');
    console.log(reveals)
    for (let i=0; i < reveals.length; i++) {
        let windowheight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealpoint = 150;

        if(revealTop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
  }