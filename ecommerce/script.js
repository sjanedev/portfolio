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