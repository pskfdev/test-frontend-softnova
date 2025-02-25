import { RootState } from "./store";

/* Load data from localStorage */
export const loadState = () => {
  try {
    const cartStore: string | null = localStorage.getItem("cartStore");
    if (!cartStore) {
      return [];
    }

    const listCart = JSON.parse(cartStore)

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
export const saveState = (state: RootState) => {
  try {
    const cartStore = JSON.stringify(state.cartStore);

    localStorage.setItem("cartStore", cartStore);
  } catch (error) {
    console.log("saveState error!" + error);
  }
};
