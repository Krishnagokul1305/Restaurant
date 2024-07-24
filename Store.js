import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./src/Features/User/userSlice";
import cartReducer from "./src/Features/Cart/cartSlice"
const Store = configureStore({
  reducer: {
    user: userReducer,
    cart:cartReducer
  },
});

export default Store