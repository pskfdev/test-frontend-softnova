/* Load data from localStorage */
export const loadState = () => {
  try {
    const cartStore:any = localStorage.getItem("cartStore");
    const listCart = JSON.parse(cartStore);

    if (listCart.cart.length == 0) {
      return [];
    } else {
      return listCart.cart;
    }
  } catch (error) {
    return [];
  }
};

/* save value to localStorage */
/* state คือ เข้าถึงข้อมูลใน store ไฟล์store */
export const saveState = (state: any) => {
  try {
    const cartStore = JSON.stringify(state.cartStore);

    localStorage.setItem("cartStore", cartStore);
  } catch (error) {
    console.log("saveState error!" + error);
  }
};
