import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../type";



interface InitialState {
    cart: Product[];
    favorite: Product[];
    userInfo: any;
}

const initialState: InitialState = {
    cart: [],
    favorite: [],
    userInfo: null
}

export const onlineShopSlice = createSlice({
    name: 'onlineShopSlice',
    initialState,
    reducers: {
        adToCart: (state, action) => {
            const existingProduct = state?.cart.find((item) => item?.id === action.playload?.id)
            // state.cart.push(action.payload)

        }
    }
})

export const { adToCart } = onlineShopSlice.actions

export default onlineShopSlice.reducer