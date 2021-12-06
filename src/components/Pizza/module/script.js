const osnova = document.getElementById('osnova');
const ingredientsFirst = document.getElementById('ingredientsFirst');
const ingredientsSecond = document.getElementById('ingredientsSecond');
const sauce = document.getElementById('sauce');
const orderViewingArea = document.getElementById('orderViewingArea');
const allLiElements = [...document.getElementsByTagName('li')];
const pricePizza = document.getElementById('pricePizza');
const btnToOrder = document.getElementById('btnToOrder');
const img = document.getElementById('imgPizza');
btnToOrder.disabled = true; //в начале кнопка не активна
let counter = 0;

const prices = {
    bezdrozh: 14,
    drozhevoe: 18,
    sloenoe: 12,
    tonkoe: 13,
    chicken: 4,
    bacon: 6,
    salmon: 9,
    shrimps: 7,
    paper: 2,
    cheese: 2,
    mushrooms: 3,
    olives: 3,
    tomatoes: 6,
    pesto: 7,
    beshamel: 8,
    garlicky: 6
}

const order = {
    ingredientsFirst: [],
    ingredientsSecond: []
}; //заказ с ингредиентами

function getTheAttributeValue(event) {
    return event.target.getAttribute('value');
}

function actionsOrder(event, sign) {
    if (sign) { // true
        event.target.classList.add('active'); //помечаем выбранный ингр.
        orderViewingArea.append(createButtonForDelete(event.target.textContent, getTheAttributeValue(event)));
        showPrice();
        switchOffOrderButton();
    } else {
        changeClassAfterDelete();
        showPrice();
        switchOffOrderButton();
    }
}

function choiceOsnova(event) {
    if (!('osnova' in order)) { //если основы нет в заказе
        order.osnova = getTheAttributeValue(event);
        actionsOrder(event, true);
        changeImg(true);
    }
}

function choiceSauce(event) {
    if (!('sauce' in order)) {
        order.sauce = getTheAttributeValue(event);
        actionsOrder(event, true);
        changeImg(true);
    }
}

function choiceIngredientsFirst(event) {
    if (order.ingredientsFirst.length < 2 && !event.target.classList.contains("active")) {
        order.ingredientsFirst.push(getTheAttributeValue(event));
        actionsOrder(event, true);
        addImgOne();
    }
}

function choiceIngredientsSecond(event) {
    if (order.ingredientsSecond.length < 2 && !event.target.classList.contains("active")) {
        order.ingredientsSecond.push(getTheAttributeValue(event));
        actionsOrder(event, true);
        addImgTwo();
    }
}

function changeImg(addImg) {
    img.src = `image/${changeImage(addImg)}.png`;
}

function changeImgMaker() {
    let counter = 0;
    return function(addImg) {
        addImg ? counter++ : counter--;
        return counter;
    }
}

const changeImage = changeImgMaker();

let counterOne = 0; //счетчик для ингридиентов 1

function addImgOne() {
    if (counterOne === 0) {
        changeImg(true);
        return counterOne++;
    } else if (counterOne === 1) {
        return counterOne++;
    }
}

function delImgOne() {
    if (counterOne === 2) {
        return counterOne--;
    } else if (counterOne === 1) {
        changeImg(false);
        return counterOne--;
    } else if (counterOne === 0) {
        return counterOne;
    }
}

let counterTwo = 0; //счетчик для ингридиентов 2

function addImgTwo() {
    if (counterTwo === 0) {
        changeImg(true);
        return counterTwo++;
    } else if (counterTwo === 1) {
        return counterTwo++;
    }
}

function delImgTwo() {
    if (counterTwo === 2) {
        return counterTwo--;
    } else if (counterTwo === 1) {
        changeImg(false);
        return counterTwo--;
    } else if (counterTwo === 0) {
        return counterTwo;
    }
}

//создание кнопки для удаления ингр из заказа
function createButtonForDelete(textContent, btnDelete) {
    let elemLi = document.createElement('li');
    let button = document.createElement('button');
    const text = document.createTextNode(textContent);
    button.id = btnDelete;
    button.textContent = 'Удалить';
    elemLi.addEventListener('click', removeIngredientFromOrder);
    elemLi.append(text);
    elemLi.append(button);
    return elemLi;
}

function removeIngredientFromOrder(event) {
    changePicture();
    //удаление ингредиента из облс просмотра заказа
    for (let key in order) {
        if (Array.isArray(order[key])) {
            order[key].forEach((item, index) => {
                if (item === event.target.id) {
                    order[key].splice(index, 1);
                    event.currentTarget.remove();
                    actionsOrder(false);

                }
            });
        }
        if (order[key] === event.target.id) {
            delete order[key];
            event.currentTarget.remove();
            actionsOrder(false);
        }
    }
}

function changePicture() {
    //изменение картинки
    if (order.ingredientsFirst.includes(event.target.id)) {
        delImgOne();
    } else if (order.ingredientsSecond.includes(event.target.id)) {
        delImgTwo();
    } else {
        changeImg(false);
    };
}

function changeClassAfterDelete() {
    let arr = Object.values(order).flat();
    allLiElements.forEach((item) => {
        if (item.classList.contains('active') && !(arr.includes(item.getAttribute('value')))) {
            item.classList.remove('active');
        }
    })
}

function calculatePricePizza() {
    let cost = 0;
    let arr = Object.values(order).flat();
    for (let key in prices) {
        if (arr.includes(key)) {
            cost += prices[key];
        }
    }
    return cost;
}

function showPrice() {
    pricePizza.textContent = `Цена: ${calculatePricePizza()} $`;
}

//при каком услвоии кнопка заказа не активна
function switchOffOrderButton() {
    btnToOrder.disabled = !(order.osnova && order.sauce && order.ingredientsFirst.length && order.ingredientsSecond.length);
}

function showTheMessageOrder() {
    alert(`Заказ оформлен! Сумма вашего заказа составила ${ calculatePricePizza ()}$. А в состав пиццы входят: ${Object.values(order).flat()}. Спасибо, что выбрали нас!`);
    btnToOrder.disabled = true; //нельзя повторно оформить заказ
}


osnova.addEventListener('click', choiceOsnova);
sauce.addEventListener('click', choiceSauce);
ingredientsFirst.addEventListener('click', choiceIngredientsFirst);
ingredientsSecond.addEventListener('click', choiceIngredientsSecond);
btnToOrder.addEventListener('click', showTheMessageOrder);