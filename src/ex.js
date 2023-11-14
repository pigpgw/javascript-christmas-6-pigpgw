import { Random, Console } from '@woowacourse/mission-utils';
import ERROR from './error.js';
import Menu from './Menu.js'; 



const inputFood = "해산물파스타";

const userSelectMenu = [
    { name: '해산물파스타', quantity: 2, price: 35000 },
    { name: '레드와인', quantity: 1, price: 60000 }
]

userSelectMenu.forEach(menu => {
    Console.print(`${menu.name} ${menu.quantity}개`);
});

for (const category in Menu) {
    const foodInCategory = Menu[category].find(food => food.name === inputFood);
    if (foodInCategory) {
        console.log("category", category);
    }
};
