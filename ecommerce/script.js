const barIcon = document.getElementById('bar');
const nav = document.getElementById('navbar');
const closeIcon = document.getElementById('close');

if (barIcon){
    barIcon.addEventListener('click',() => {
        nav.classList.add('active');
    })
}
if (closeIcon){
    closeIcon.addEventListener('click',() => {
        nav.classList.remove('active');
    })
}

let mainImg = document.getElementById("MainImg");
let smallImgs = document.getElementsByClassName("small-img");
let proDivs = document.getElementsByClassName("pro");

//
// let shopURL = window.location.href;
// let urlString =  new URL(shopURL);
// let imgUrl = urlString.searchParams.get("img");
// console.log(imgUrl)
// if (mainImg) {
//     mainImg.src = imgUrl;

// } 
//

for (img of smallImgs) {
    img.addEventListener('click', function(e){
        mainImg.src = e.target.src;
    }) 
}

for (proDiv of proDivs) {
    proDiv.addEventListener('click', function(e){
        window.location.href=`sproduct.html`;
        
    }) 
}


// for (proDiv of proDivs) {
//     proDiv.addEventListener('click', function(e){
//         imgSrc = this.firstChild.nextSibling.src;
//         window.location.href=`sproduct.html?img=${imgSrc}`;
        
//     }) 
// }