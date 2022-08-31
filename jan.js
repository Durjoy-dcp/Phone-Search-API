// console.log("connectd");
function fetchData() {
    const url = "https://openapi.programming-hero.com/api/phones?search=iphone";
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhone(data.data))
        .catch(error => console.log(error))
}


function displayPhone(data) {
    const parentContainer = document.getElementById('show-phone');
    parentContainer.innerHTML = ``;
    data.forEach(item => {
        console.log(item);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `    <div class="card">
            <img src="${item.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${item.phone_name}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.</p>
            </div>`;
        parentContainer.appendChild(div);
    });
}
fetchData();