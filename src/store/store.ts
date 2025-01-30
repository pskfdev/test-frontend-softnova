import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cartSlice";
import { saveState } from "./util";

export const store = configureStore({
  reducer: {
    cartStore: cartSlice,
  },
});

/* ติดตามค่า store ถ้า store ไหนมีการเปลี่ยนแปลงค่า ให้ใช้ฟังก์ชั่น saveState เพื่อบันทึกข้อมูลล่าสุดลง LocalStorage */
store.subscribe(() => {
  saveState(store.getState());
});
