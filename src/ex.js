import { Random, Console } from '@woowacourse/mission-utils';
import ERROR from './error.js';
import Menu from './Menu.js'; 

const userSelectMenu = [];
const totalPrice = 0;



const input = await Console.readLineAsync("주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)");
const forCheckUserMenu = input.split(',');
forCheckUserMenu.forEach(item => {
    const menu = item.split("-");
    // userSelectMenu.push(menu[0]);
    // totalPrice += Number(menu[1]);
    
    console.log(menu[0]);
    console.log(menu[1]);
});


