import { Random, Console } from '@woowacourse/mission-utils';
import inputValidation from './inputValidation.js';
import inputView from './InputView.js';
import OutputView from './OutputView.js';
import Menu from './Menu.js';

const Event = {

    totalDiscountCalculator(reserveDay, userOrderList,beforeDiscount){
        let totalDiscount = 0;
        totalDiscount += this.dDayDiscount(reserveDay);
        totalDiscount += this.aWeekDiscount(reserveDay,userOrderList);
        totalDiscount += this.checkStar(reserveDay);

        // 증정품도 할인 혜택에 더함
        totalDiscount += this.giveawayMenuCheck(beforeDiscount).price;
        // console.log("증정품 가격 체크", this.giveawayMenuCheck(beforeDiscount).price);
        // console.log("totalDiscount",totalDiscount);
        return totalDiscount;
    },

    dDayDiscount(reserveDay){
        if (reserveDay <= 25) {
            const discountMoney = 1000 + Number(reserveDay) * 100;
            // console.log("크리스마스 디데이 할인", discountMoney);
            return discountMoney;  
        }
    },

    // 1일 금요일
    aWeekDiscount(reserveDay,userOrderList){
        let discountMoney = 0;
        const watDay = reserveDay % 7;
        // 평일 주말 할인 
        discountMoney += this.applyWeekDiscount(watDay,userOrderList);
        // console.log("크리스마스 디데이 할인 체크", discountMoney);
        return discountMoney;
    },

    applyWeekDiscount(inputDay,userOrderList){
        let discountMoney = 0;
        let dessertCount = 0;
        let mainCount = 0;

        userOrderList.forEach(item => {
            const ban = this.checkTypeOfFood(item.name);
            // console.log("check", ban);
            // console.log("item",item.name);
            if (this.checkTypeOfFood(item.name) === "main"){
                mainCount += 1* item.quantity;
            }

            if (this.checkTypeOfFood(item.name) === "dessert") {
                dessertCount += 1 * item.quantity;
            }
        });
        // 주말은 메인 메뉴를 1개당 2023할인
        if ((inputDay === 1 || inputDay === 2) && mainCount !== 0){
            // 메인 메뉴가 존재하는지 체크
            // console.log("주말은 메인 메뉴 할인 mainCount", mainCount);
            discountMoney += 2023 * mainCount;
        }

        if ((inputDay === 3 || (inputDay < 7 && inputDay > 2)) && dessertCount !== 0) {
            // 디저트가 존재하는지 체크
            // console.log("평일은 디저트 할인 dessertCount", dessertCount);
            discountMoney += 2023 * dessertCount;
        }
        // console.log("discountMoney 평일 주말 메뉴 할인 체크", discountMoney);
        
        return discountMoney;
    },

    checkStar(inputDay) {
        let discountMoney = 0;
        if (inputDay % 7 === 3 || inputDay === 25) {
            discountMoney += 1000;
        }
        return discountMoney;
    },

    checkTypeOfFood(inputFood){
        const foodType = this.categoryInFood(inputFood);
        return foodType;
    },

    categoryInFood(inputFood) {
        const categories = Object.keys(Menu);

        for (const category of categories) {
            const foodInCategory = Menu[category].find(food => food.name === inputFood);

            if (foodInCategory) {
                return category;
            }
        }
        return 'Unknown';
    },


    giveawayMenuCheck(beforeDiscount) {
        if (beforeDiscount > 120000) {
            return { name: '샴페인', quantity: 1, price: 0 };
        }
        return { name: '없음', quantity: 0, price: 0 };
    },


    // giveBadgeCheck(beforeDiscount, ){
    //     const 총 해택 = 할인 금액 합계 + 증정 메뉴;
    //     총 혜택
    // }


}

export default Event;