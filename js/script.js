const lastWatched = function(elements) {
    const lastWatchedList = document.getElementById('js-last-watched__list');
    
    elements.forEach(element => {
        const listItem = document.createElement('li');
        const imgItem = document.createElement('img');

        listItem.classList.add('last-watched__item');
        imgItem.classList.add('last-watched__image');
        imgItem.src = element.img;
        imgItem.style.width = '100px';
        imgItem.style.height = '100px';

        lastWatchedList.appendChild(listItem);
        listItem.appendChild(imgItem);        
    });
}

const contentDisplay = function(elements) {
    const content = document.getElementById('js-content__store__list');

    elements.forEach(element => {        
        const listItem = document.createElement('li');
        const imgItem = document.createElement('img');
        const spanPrice = document.createElement('span');
        const infoItem = document.createElement('p');
        const buttonItem = document.createElement('span')

        listItem.classList.add('content__store__item');

        imgItem.classList.add('content__store__img');
        imgItem.src = element.img;
        imgItem.style.width = '160px';
        imgItem.style.height = '317px';

        spanPrice.classList.add('content__store__price');
        spanPrice.innerHTML = element.price + ' zł';

        infoItem.classList.add('content__store__info');
        infoItem.innerHTML = element.info;
        
        buttonItem.innerHTML = '<button class="content__store__btn btn btn-navigator" onclick="userCart(' + element.id + ')">Dodaj do koszyka</button>';
        content.appendChild(listItem);
        listItem.appendChild(imgItem);
        listItem.appendChild(buttonItem);
        listItem.appendChild(spanPrice);
        listItem.appendChild(infoItem);
    });
}

let calculationProduct = 0;
let numberOfProducts = 0;

const userCart = function(id) {    
    const cart = document.getElementById('js-user-cart');

    for (let i = 0; i < clothes.length; i++) {
        const element = clothes[i];
        if (element.id === id) {
            calculationProduct += element.price;
            numberOfProducts += 1;
        }
    }
    
    cart.innerHTML = calculationProduct + ' zł/ prod. (' + numberOfProducts + ')';
}

lastWatched(clothes);
contentDisplay(clothes);
userCart();