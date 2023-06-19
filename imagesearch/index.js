const accessKey = config.UNSPLASH_API_KEY;

const formEl = document.querySelector("form");
const inputEl = document.getElementById("search-input");
const searchResults = document.querySelector(".search-results");
const showMore = document.getElementById ("show-more-button");
const searchButton = document.getElementById ("search-button");

let inputData = "";
let page = 1;

async function searchImages(){
    inputData = inputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

    const response = await fetch(url);
    //console.log(response);
    const data = await response.json();
    console.log(data.total);
    const results = data.results;

    if (page === 1){
        searchResults.innerHTML = "";
    }
    results.map((result) =>{
        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add("search-result");
        const image = document.createElement('img');
        image.src=result.urls.small;
        image.alt=result.alt_description;
        const imageLink= document.createElement('a');
        imageLink.href=result.links.html;
        imageLink.target="_blank";    
        imageLink.textContent=result.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResults.appendChild(imageWrapper);
    });

    page++ 
    if(page>1){
        showMore.style.display="block";
    }
    // alert(url);

}
formEl.addEventListener("submit", (Event)=>{
    event.preventDefault();
    page=1;
    searchImages()
});

showMore.addEventListener("click", ()=>{
    searchImages()
});