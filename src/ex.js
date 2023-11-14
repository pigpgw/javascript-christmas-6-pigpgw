import { Random, Console } from '@woowacourse/mission-utils';
import ERROR from './error.js';
import Menu from './Menu.js'; 



const sfood = "해산물파스타";

const userSelectMenu = [
    { name: '해산물파스타', quantity: 2, price: 35000 },
    { name: '레드와인', quantity: 1, price: 60000 }
]

userSelectMenu.forEach(menu => {
    Console.print(`${menu.name} ${menu.quantity}개`);
});

