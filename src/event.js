import { Random, Console } from '@woowacourse/mission-utils';
import inputValidation from './inputValidation.js';
import inputView from './InputView.js';
import OutputView from './OutputView.js';
import Menu from './Menu.js';

const Event = {
    dDayDiscount(reserveDay){
        const discountMoney = 1000 + reserveDay * 100;
        return discountMoney;  
    },

    // 1일 금요일
    aWeekDiscount(reserveDay,userOrderList){
        const watDay = reserveDay / 7;
        applyWeekDiscount(watDay);

    },

    applyWeekDiscount(inputDay,userOrderList){
        const totalDiscount = 0;
        const appetizerCount = 0;
        const dessertCount = 0;
        const mainCount = 0;
        const beverageCount = 0;

        userOrderList.forEach(item => {
            if (this.checkTypeOfFood(item) === "main"){
                mainCount += 1;
            }
            if (this.checkTypeOfFood(item) === "appetizer") {
                appetizerCount += 1;
            }
            if (this.checkTypeOfFood(item) === "beverage") {
                beverageCount += 1;
            }
            if (this.checkTypeOfFood(item) === "dessertCount") {
                dessertCount += 1;
            }
        });
        // 주말은 메인 메뉴를 1개당 2023할인
        if (inputDay === 1 || inputDay === 2 || mainCount !== 0){
            // 메인 메뉴가 존재하는지 체크
            totalDiscount += 2023 * mainCount;
        }

        if (inputDay === 3 || 7 > inputDay > 2 || dessertCount !== 0) {
            // 메인 메뉴가 존재하는지 체크
            totalDiscount += 2023 * dessertCount;
        }
        console.log("totalDiscount",totalDiscount);
        return totalDiscount;
    },

    checkTypeOfFood(inputFood){
        const foodType = this.categoryInFood(inputFood);
        return foodType;
    },

    categoryInFood(inputFood){
        for (const category in Menu){
            const foodInCategory = Menu[category].find(food => food.name === inputFood);
            if (foodInCategory) {
                return category
            }
            return 
        }
    },


}

export default Event;