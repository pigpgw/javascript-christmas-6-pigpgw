import Menu from './Menu.js';


const Event = {

    totalDiscountCalculator(reserveDay, userOrderList,beforeDiscount){
        let totalDiscount = 0;
        if (beforeDiscount >= 10000) {
            totalDiscount += this.dDayDiscount(reserveDay);
            totalDiscount += this.aWeekDiscount(reserveDay, userOrderList);
            totalDiscount += this.checkStar(reserveDay);
        }

        return totalDiscount;
    },

    totalBenefitCalculator(reserveDay,userOrderList,beforeDiscount){
        let totalBenefit = 0;
        if (beforeDiscount >= 10000) {
            totalBenefit += this.totalDiscountCalculator(reserveDay, userOrderList, beforeDiscount);
            totalBenefit += this.giveawayMenuCheck(beforeDiscount);
        }

        return totalBenefit;
    },

    dDayDiscount(reserveDay, beforeDiscount) {
        let discountMoney = 0;
        if (reserveDay <= 25 && beforeDiscount >= 10000) {
            discountMoney = 1000 + Number(reserveDay - 1) * 100;
            return discountMoney;
        }
        return 0;
    },

    aWeekDiscount(reserveDay, userOrderList, beforeDiscount){
        let discountMoney = 0;
        if (beforeDiscount >= 10000){
            const watDay = reserveDay % 7;
            discountMoney += this.applyWeekDiscount(watDay, userOrderList, beforeDiscount);
        }
        return discountMoney;
    },

    applyWeekDiscount(inputDay, userOrderList, beforeDiscount) {
        let discountMoney = 0;
        if (beforeDiscount >= 10000) {
            const { dessertCount, mainCount } = this.calculateCountsByCategory(inputDay, userOrderList);
            if ((inputDay === 1 || inputDay === 2) && mainCount !== 0) {
                discountMoney += 2023 * mainCount;
            }
            if ((inputDay === 3 || (inputDay < 7 && inputDay > 2)) && dessertCount !== 0) {
                discountMoney += 2023 * dessertCount;
            }
        }
        return discountMoney;
    },

    calculateCountsByCategory(userOrderList) {
        let dessertCount = 0;
        let mainCount = 0;
        userOrderList.forEach(item => {
            const category = this.checkTypeOfFood(item.name);
            if (category === "main") {
                mainCount += item.quantity;
            }
            if (category === "dessert") {
                dessertCount += item.quantity;
            }
        });
        return { dessertCount, mainCount };
    },

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