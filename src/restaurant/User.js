class User {
  #reservationDate;
  #orderMenuList = {};

  setReservationDate(reservationDate) {
    this.#reservationDate = reservationDate;
  }

  getReservationDate() {
    return this.#reservationDate;
  }

  setOrderMenuList(orderList) {
    orderList.split(",").forEach(item => {
        const [menu , count] = item.split("-")
        this.#orderMenuList[menu] = Number(count);
    });
  }

  getOrderMenuList() {
    return this.#orderMenuList;
  }
}

export default User;
