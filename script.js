var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

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