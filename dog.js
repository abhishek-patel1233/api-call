let btn = document.querySelector("#btn");
let img = document.querySelector("#dog");

let url2 = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click", async function () {

    let res = await fetch(url2);
    let data = await res.json();

    img.src = data.message;
});