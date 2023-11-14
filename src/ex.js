import { Random, Console } from '@woowacourse/mission-utils';
import ERROR from './error.js';
import Menu from './Menu.js'; 

const userSelectMenu = [];
const totalPrice = 0;


console.log(Menu.main[0].name);

Menu.appetizer.forEach(item => {
    console.log(item);
});

const menuName = '초코케이크';

const menuCategory = Menu[category].find(item => item.name === itemName);

console.log(menuCategory);