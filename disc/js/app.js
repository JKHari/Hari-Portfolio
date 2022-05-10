const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})
setTimeout (()=>{
    const titledesign = document.getElementById("cen-txt")
    titledesign.style.color= "crimson";
},2000);

