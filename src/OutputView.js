import { Console } from '@woowacourse/mission-utils';

const OutputView = {

    printServiceStart (){
        Console.print("안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.");
    },

    printMenu(userOrderList) {
        Console.print("<주문 메뉴>");
        userOrderList.forEach(menu => {
            Console.print(`${menu.name} ${menu.quantity}개`);
        });
    },

    printBeforeDiscount(totalPrice){
        Console.print("<할인 전 총주문 금액>");
        Console.print(`${totalPrice.toLocaleString()}원`);
    },

    printGiveAway(beforeDiscount) {
        Console.print("<증정 메뉴>");

        if (beforeDiscount >= 120000) {
            Console.print(`샴페인 1개`);
        } 

        if (beforeDiscount < 120000) {
            Console.print("없음");
        }
    },

    printBenefit(dDayDiscount, aWeekDiscount, checkStar,beforeDiscount){
        let totalDiscount = 0;
        Console.print("<혜택 내역>");
        this.printCheckDiscount(dDayDiscount);
        this.printDdayDiscount(totalDiscount,dDayDiscount);
        this.printWeekDiscount(totalDiscount,aWeekDiscount);
        this.printCheckStar(checkStar,totalDiscount);
        this.printCheckGiveAway(beforeDiscount,totalDiscount);
        this.printTotalBenefitPrice(totalDiscount);
    },

    printCheckDiscount(dDayDiscount){
        if (dDayDiscount === 0) {
            Console.print(`없음`);
        }
    },

    printDdayDiscount(totalDiscount,dDayDiscount){
        if (dDayDiscount !== 0) {
            totalDiscount += dDayDiscount;
            Console.print(`크리스마스 디데이 할인: -${dDayDiscount.toLocaleString()}원`);
        }
    },

    printWeekDiscount(totalDiscount,aWeekDiscount){
        if (aWeekDiscount !== 0) {
            totalDiscount += aWeekDiscount;
            Console.print(`평일 할인: -${aWeekDiscount.toLocaleString()}원`);
        }
    },

    printCheckStar(checkStar,totalDiscount){
        if (checkStar !== 0) {
            totalDiscount += checkStar;
            Console.print(`특별 할인: -${checkStar.toLocaleString()}원`);
        }
    },

    printCheckGiveAway(beforeDiscount,totalDiscount){
        if (beforeDiscount >= 120000) {
            totalDiscount += Number(25000);
            Console.print(`증정 이벤트: -25,000원`)
        }
    },

    printTotalBenefitPrice(totalDiscount){
        Console.print("<총혜택 금액>");
        if (totalDiscount !== 0) {
            Console.print(`-${totalDiscount.toLocaleString()}원`);
        }
        if (totalDiscount === 0) {
            Console.print(`${totalDiscount.toLocaleString()}원`);
        }
    },
    
    
    printAfterDiscount(beforeDiscount, totalBenefit){
        let afterDiscount = beforeDiscount - totalBenefit;
        Console.print("<할인 후 예상 결제 금액>");
        Console.print(`${afterDiscount.toLocaleString()}원`);
    },

    printBedge(bedge){
        Console.print("<12월 이벤트 배지>");
        Console.print(`${bedge}`);
    },
    
}

export default OutputView;