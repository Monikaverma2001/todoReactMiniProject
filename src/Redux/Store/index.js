import { configureStore } from "@reduxjs/toolkit";
import { myReducer } from "../Reducer";

export const mystore=configureStore({
   reducer:{
    count:myReducer
   }
})