import Menu from "./Menu.js";
class RestaurantController {
    #totalPrice = 0;;
    #totalBenefit = 0;;
    #customerReservationDate = 0;
    #customerReservationMenuList;

    constructor(){
        this.main = Menu.메인;
    }

    setCustomeReservationDate(date){
        this.#customerReservationDate = date;
    }

    setCustomerReservationMenuList(menuList){
        this.#customerReservationMenuList = menuList;
    }

    calculateTotalPrice(){
        const orderdKeys = Object.keys(this.#customerReservationMenuList)
        for (const menu of orderdKeys) this.#totalPrice += this.findMenu(menu);
    }

    getTotalPrice(){
        return this.#totalPrice
    }

    findMenu(item){
        for (const category in Menu){
            const categoryMenuList = Menu[category]
            if (categoryMenuList.hasOwnProperty(item)) {
                // console.log('find menu',categoryMenuList[item])
                return categoryMenuList[item]
            }
        }
    }


}

export default RestaurantController;