import { Random, Console } from '@woowacourse/mission-utils';
import inputValidation from './inputValidation.js';
import inputView from './InputView.js';
import OutputView from './OutputView.js';
import Menu from './Menu.js';


const Event = {

    // 총 할인에는 증정 메뉴 가격이 안들어감
    totalDiscountCalculator(reserveDay, userOrderList,beforeDiscount){
        let totalDiscount = 0;
        if (beforeDiscount >= 10000) {
            totalDiscount += this.dDayDiscount(reserveDay);
            totalDiscount += this.aWeekDiscount(reserveDay, userOrderList);
            totalDiscount += this.checkStar(reserveDay);
        }

        return totalDiscount;
    },

    // 총 혜택 = 할인 금액의 합계 + 증정 메뉴의 가격
    totalBenefitCalculator(reserveDay,userOrderList,beforeDiscount){
        let totalBenefit = 0;
        if (beforeDiscount >= 10000) {
            totalBenefit += this.totalDiscountCalculator(reserveDay, userOrderList, beforeDiscount);
            totalBenefit += this.giveawayMenuCheck(beforeDiscount);
        }

        return totalBenefit;
    },

    // 크리스마스 디데이 할인
    dDayDiscount(reserveDay, beforeDiscount) {
        let discountMoney = 0;
        if (reserveDay <= 25 && beforeDiscount >= 10000) {
            discountMoney = 1000 + Number(reserveDay - 1) * 100;
            return discountMoney;
        }
        return 0;
    },

    // 크리스마스 평일 주말 요일별 할인 할인 체크
    aWeekDiscount(reserveDay, userOrderList, beforeDiscount){
        let discountMoney = 0;
        if (beforeDiscount >= 10000){
            const watDay = reserveDay % 7;
            discountMoney += this.applyWeekDiscount(watDay, userOrderList, beforeDiscount);
        }
        return discountMoney;
    },

    // 
    applyWeekDiscount(inputDay,userOrderList, beforeDiscount){
        let discountMoney = 0;
        let dessertCount = 0;
        let mainCount = 0;

        if (beforeDiscount >= 10000){
            userOrderList.forEach(item => {
                const ban = this.checkTypeOfFood(item.name);
                if (this.checkTypeOfFood(item.name) === "main") {
                    mainCount += 1 * item.quantity;
                }

                if (this.checkTypeOfFood(item.name) === "dessert") {
                    dessertCount += 1 * item.quantity;
                }
            });
            // 주말은 메인 메뉴를 1개당 2023할인
            if ((inputDay === 1 || inputDay === 2) && mainCount !== 0) {
                // 메인 메뉴가 존재하는지 체크
                discountMoney += 2023 * mainCount;
            }

            if ((inputDay === 3 || (inputDay < 7 && inputDay > 2)) && dessertCount !== 0) {
                // 디저트가 존재하는지 체크
                discountMoney += 2023 * dessertCount;
            }

        }
        return discountMoney;
    },

    // 별이 달린 날짜 할인
    checkStar(inputDay, beforeDiscount) {
        let discountMoney = 0;
        if (beforeDiscount >= 10000 && (inputDay % 7 === 3 || inputDay === 25)){
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
    },

    // 증정 이벤트
    giveawayMenuCheck(beforeDiscount) {
        let discountMoney = 0;
        if (beforeDiscount >= 120000) {
            discountMoney += 25000;
            return discountMoney;
        }
        return discountMoney;
    },


    giveBadgeCheck(totalBenefit){
        let bedge = "";
        if (totalBenefit >= 5000 && totalBenefit < 100000){
            return bedge += "별";
        }

        if (totalBenefit >= 10000 && totalBenefit < 20000){
            return bedge += "트리";
        }

        if (totalBenefit >= 20000){
            return bedge += "산타";
        }

        bedge += "없음";
        return  bedge;
    }


}

export default Event;