'use strict'

let price = +prompt('Введите стоимость товара');
let money = +prompt('Введите количество ваших денег');
if(price==money){
    alert('Покупка совершена');
}else if(price>money){
    let difference = price-money;
    alert(`Для покупки не хватает ${difference} р.`);
} else if(price<money){
    let change = money-price;
    alert(`Покупка совершена. Сдача ${change} р.`);
}

let num = +prompt('Введите число');
if(num>0){
    alert(1);
}else if(num<0){
    alert(-1);
}else if(num==0){
    alert(0);
}

let a = +prompt('Введите первое число');
let b = +prompt('Введите второе число');
let result = (a+b<4) ? 'Мало' : 'Много';
alert(result)

let login = prompt('Введите ваш логин');
let message = (login=='Сотрудник') ? 'Привет' : login == 'Директор' ? 'Здравствуйте' : login == '' ? 'Нет логина' : 'Пусто';
alert(message)

