var submenuBlur = document.getElementsByClassName('sub-menu-blur')[0];


// Submenu
const mainMenuLi = document.querySelector('.main-navbar > ul')
mainMenuLi.addEventListener('click', function (e) {

    var target = e.target; // Clicked element
    const li = target.closest('li');
    const nodes = Array.from( li.closest('ul').children );
    const index = nodes.indexOf( li );

    // Remove active class from not selected element 
    [...mainMenuLi.children].forEach(element => {
        if(index !== [...element.parentNode.children].indexOf(element)) {
            element.classList.remove('active')
        }
    });
    
    while (target && target.parentNode !== mainMenuLi) {
        target = target.parentNode; // If the clicked element isn't a direct child
        if(!target) { return; } // If element doesn't exist
    }
    if (target.tagName === 'LI'){
        target.classList.toggle('active')
    }

    if(target.classList.contains('active')) {
        submenuBlur.style.display = 'block'
    } else {
        submenuBlur.style.display = 'none'
    }
});


const searchToggleBtn = document.getElementById('searchToggleBtn').addEventListener('click', searchToggle)
const searchCloseBtn = document.getElementById('searchCloseBtn').addEventListener('click', searchClose)
const navbarToggleBar = document.getElementById('navbarToggleBar').addEventListener('click', navBarToggle)

// Search Function
function searchToggle() {
    var x = document.getElementById("searchBar");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
function searchClose() {
  var x = document.getElementById("searchBar");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
// Mobile Navbar Function
function navBarToggle() {
  var x = document.getElementById("navBarToggle");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}