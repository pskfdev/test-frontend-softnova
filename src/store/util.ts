/* Load data from localStorage */
export const loadState = () => {
  try {
    const cartStore = localStorage.getItem("cartStore");
    const cart = JSON.parse(cartStore);

    if (cart.length == 0) {
      return [];
    } else {
      return cart;
    }
  } catch (error) {
    return [];
  }
};

/* save value to localStorage */
/* state คือ เข้าถึงข้อมูลใน store ไฟล์store */
export const saveState = (state:any) => {
  try {
    const cartStore = JSON.stringify(state.cartStore);

    localStorage.setItem("cartStore", cartStore);
  } catch (error) {
    console.log("saveState error!" + error);
  }
};
