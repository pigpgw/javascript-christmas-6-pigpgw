import { Random, Console } from '@woowacourse/mission-utils';
import inputValidation from './inputValidation.js';
import inputView from './InputView.js';
import OutputView from './OutputView.js';
import Menu from './Menu.js';

const Event = {

    dDayDiscount(reserveDay){
        const discountMoney = 1000 + reserveDay * 100;
        console.log("크리스마스 디데이 할인",discountMoney);
        return discountMoney;  
    },

    // 1일 금요일
    aWeekDiscount(reserveDay,userOrderList){
        const watDay = reserveDay % 7;
        let totalDiscount = 0;
        totalDiscount += this.applyWeekDiscount(watDay,userOrderList);
        console.log("totalDiscount",totalDiscount);
        return totalDiscount;
    },

    applyWeekDiscount(inputDay,userOrderList){
        let totalDiscount = 0;
        // let appetizerCount = 0;
        let dessertCount = 0;
        let mainCount = 0;
        // let beverageCount = 0;

        console.log("inputDay",inputDay);
        console.log("userOrderList", userOrderList[0].name);
        

        userOrderList.forEach(item => {
            const ban = this.checkTypeOfFood(item.name);
            console.log("check", ban);
            console.log("item",item.name);
            if (this.checkTypeOfFood(item.name) === "main"){
                mainCount += 1* item.quantity;
            }
            // if (this.checkTypeOfFood(item.name) === "appetizer") {
            //     appetizerCount += 1* item.quantity;
            // }
            // if (this.checkTypeOfFood(item.name) === "beverage") {
            //     beverageCount += 1* item.quantity;
            // }
            if (this.checkTypeOfFood(item.name) === "dessertCount") {
                dessertCount += 1* item.quantity;
            }
        });
        // 주말은 메인 메뉴를 1개당 2023할인
        if ((inputDay === 1 || inputDay === 2) && mainCount !== 0){
            // 메인 메뉴가 존재하는지 체크
            console.log("주말은 메인 메뉴 할인 mainCount", mainCount);
            totalDiscount += 2023 * mainCount;
        }

        if ((inputDay === 3 || (inputDay < 7 && inputDay > 2)) && dessertCount !== 0) {
            // 디저트가 존재하는지 체크
            console.log("평일은 디저트 할인 dessertCount", dessertCount);
            totalDiscount += 2023 * dessertCount;
        }
        console.log("totalDiscount 평일 주말 할인 체크", totalDiscount);
        
        return totalDiscount;
    },

    checkStar(inputDay) {
        let price = 0;
        if (inputDay % 7 === 3 || 25) {
            totalDiscount += 1000;
            return totalDiscount;
        }
    },
    
    checkTypeOfFood(inputFood){
        const foodType = this.categoryInFood(inputFood);
        return foodType;
    },

    categoryInFood(inputFood){
        const categories = Object.keys(Menu);

        for (const category of categories) {
            const foodInCategory = Menu[category].find(food => food.name === inputFood);

            if (foodInCategory) {
                return category;
            }
        }
    },

}

export default Event;