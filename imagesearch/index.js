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
    // unsplash request URL
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
    //fetching response from unsplash 
    const response = await fetch(url);
    // console.log(response);
    // converting response to json format
    const data = await response.json();
    // console.log(data.total);
    if (data.total > 0){

        // extracting data from json response
        const results = data.results;

        if (page === 1){
            searchResults.innerHTML = "";
        }
        results.map((result) =>{

            // console.log(result);    
            // const imageWrapper = document.createElement('div');
            // imageWrapper.classList.add("search-result");
            // const image = document.createElement('img');
            // image.src=result.urls.small;
            // image.alt=result.alt_description;
            // const imageLink= document.createElement('a');
            // imageLink.href=result.links.html;
            // imageLink.target="_blank";    
            // imageLink.textContent=result.alt_description;

            // imageWrapper.appendChild(image);
            // imageWrapper.appendChild(imageLink);
            // searchResults.appendChild(imageWrapper);

            const anchorWrapper = document.createElement('a');
            anchorWrapper.target="_blank";
            anchorWrapper.href=result.links.html;
            const imageWrapper = document.createElement('div');
            imageWrapper.classList.add("search-result");
            const image = document.createElement('img');
            image.src=result.urls.small;
            image.alt=result.alt_description;
            const imageText = document.createElement('p');
            imageText.classList.add("image-text");
            imageText.textContent = result.alt_description;

            anchorWrapper.appendChild(imageWrapper);
            imageWrapper.appendChild(image);
            imageWrapper.appendChild(imageText);
            searchResults.appendChild(anchorWrapper);
            });

        page++ 
        if(page>1){
            showMore.style.display="block";
        }
        // alert(url);
    }
    else{
        searchResults.textContent = "";
        const message = document.createElement('div');
        message.classList.add("message");
        message.textContent = "No results found";
        page = 1;
        showMore.style.display = "none"; 
        searchResults.appendChild(message);
    }
}
formEl.addEventListener("submit", (Event)=>{
    event.preventDefault();
    page=1;
    searchImages()
});

showMore.addEventListener("click", ()=>{
    searchImages()
});