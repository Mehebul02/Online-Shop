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
            const existingProduct = state?.cart.find((item) => item?.id === action.payload?.id)
            
            if (existingProduct) {
                existingProduct.quantity! += 1
            }else{
                state.cart.push({...action.payload,quantity:1})
            }

        }
    }
})

export const { adToCart } = onlineShopSlice.actions

export default onlineShopSlice.reducer