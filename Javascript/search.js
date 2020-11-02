function search_item() { 
    let input = document.getElementById('searchbar').value 
    input=input.toLowerCase(); 
    let x = document.getElementsByClassName('items'); 
    ol = document.getElementById('list');

    /*if(input.value.length == 0){
        ul.style.display = "none";
        return;
    }else{
        ul.style.display = "block";
    }
    if(input){
        document.querySelector('h2').style.display = "none";
        document.querySelector('.noitems').style.display = "none";
        document.querySelector('.mySlide fade').style.display = "none";
    }
    else{
        document.querySelector('h2').style.display = "block";
        document.querySelector('.noitems').style.display = "block";
    }*/

    for (i = 0; i < x.length; i++) {  
        if (!x[i].innerHTML.toLowerCase().includes(input)) { 
            x[i].style.display="none"; 
        } 
        else { 
            x[i].style.display="list-item";                  
        } 
    } 
}

/*
const itemsList = document.getElementById('list');
const searchBar = document.getElementById('searchbar');
let items = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredItems = items.filter((items) => {
        return (
            items.name.toLowerCase().includes(searchString) ||
            items.house.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredItems);
});

const loadCharacters = async () => {
    try {
        const res = await fetch('https://hp-api.herokuapp.com/api/characters');
        items = await res.json();
        displayItems(items);
    } catch (err) {
        console.error(err);
    }
};

const displayItems = (items) => {
    const htmlString = items
        .map((items) => {
            return `
            <li class="items">
                <h2>${items.name}</h2>
                <p>House: ${items.house}</p>
                <img src="${items.image}"></img>
            </li>
        `;
        })
        .join('');
    itemsList.innerHTML = htmlString;
};

loadItems();
*/