import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    favorite:[],
    userInfo:null
}

export const onlineShopSlice = createSlice({
    name: 'onlineShopSlice',
    initialState,
    reducers:{
        adToCart:(state,action)=>{
            state.cart = action.payload

        }
    }
})

export const {adToCart} = onlineShopSlice.actions

export default onlineShopSlice.reducer