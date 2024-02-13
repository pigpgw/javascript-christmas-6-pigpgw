class User {
  #reservationDate;
  #orderMenuList;

  setReservationDate(reservationDate) {
    this.#reservationDate = reservationDate;
  }

  getReservationDate() {
    return this.#reservationDate;
  }

  setOrderMenuList(orderList) {
    this.#orderMenuList = orderList;
  }

  getOrderMenuList() {
    return this.#orderMenuList;
  }
}

export default User;
