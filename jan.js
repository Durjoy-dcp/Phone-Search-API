
function fetchData() {

    let srchField = document.getElementById('srch').value;
    // srchField = srchField == '' ? "iphone" : srchField;
    const url = `https://openapi.programming-hero.com/api/phones?search=${srchField}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhone(data.data))
        .catch(error => console.log(error))
}


function displayPhone(data) {
    const parentContainer = document.getElementById('show-phone');
    parentContainer.innerHTML = ``;
    if (data.length == 0) {
        document.getElementById('result').classList.remove('d-none');
    } else {
        document.getElementById('result').classList.add('d-none');

    }

    // checking the show all button that it is in d none and the length . here is the difference between me and sir 
    if (document.getElementById('btn-show-all').classList.contains('d-none') && data.length > 10) {
        data = data.slice(0, 10);
        document.getElementById('btn-show-all').classList.remove('d-none');
    } else {
        document.getElementById('btn-show-all').classList.add('d-none');

    }
    data.forEach(item => {
        // console.log(item);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `<div class="card">
            <img src="${item.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${item.phone_name}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.</p>
            </div>`;
        parentContainer.appendChild(div);
    });
    toggle(false);
}
// fetchData();
function toggle(ok) {
    if (ok) {
        document.getElementById('spiner').classList.remove('d-none');
    } else {
        document.getElementById('spiner').classList.add('d-none');

    }
}
function callingFunction() {
    toggle(true);
    fetchData();
}
document.getElementById('btn-show-all').addEventListener('click', fetchData);