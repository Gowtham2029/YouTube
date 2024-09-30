import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./AppSlice";
import SearchSlice from "./SearchSlice";
import chatSlice from "./chatSlice";

const Store = configureStore({
    reducer: {
        app: AppSlice,
        search: SearchSlice,
        chat: chatSlice
    }
})

export default Store;