window.onload = function(){
  
  window.setTimeout(function(){
    const headerText = document.querySelector(".header-text");
    headerText.style.visibility = "visible";
    headerText.style.opacity = "1";
    // console.log("test");
  },500);
  window.setTimeout(function(){
    const nav = document.querySelector("nav");
    nav.style.visibility = "visible";
    nav.style.opacity = "1";
    // console.log("test");
  },1000);
};

var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");
var sideMenu = document.getElementById("side-menu");


function openTab(tabname){
    for(tab of tabLinks){
        tab.classList.remove("active-link");
    }
    for(tab of tabContents){
        tab.classList.remove("active-tab");
        event.currentTarget.classList.add("active-link");
    }
    var activeContent = document.getElementById(tabname);
    activeContent.classList.add("active-tab");
}
function onSubmit(){
    alert("Under Construction");
}
function openMenu(){
    sideMenu.style.right = "0";
}
function closeMenu(){
    sideMenu.style.right = "-200px";
}
// ------------contact form script--------------
const scriptURL = config.GOOGLE_SHEETS_URL
// console.log(scriptURL)
  const form = document.forms['submit-to-google-sheet']
  const msg =  document.getElementById('msg')
  const modal = document.getElementById("modal");
//   modal.showModal();
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        modal.showModal();
        setTimeout(function(){
            modal.close();
        },5000)
        document.getElementById("contact").scrollIntoView();
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

  
// ----------------------- getting viewport sizes---------------------