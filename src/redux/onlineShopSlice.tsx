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
            } else {
                state.cart.push({ ...action.payload, quantity: 1 })
            }

        },
        increaseQuantity: (state, action) => {
            const existingProduct = state?.cart.find((item) => item?.id === action.payload)
            if (existingProduct) {
                existingProduct.quantity! += 1
            }
        },
        decreaseQuantity: (state, action) => {
            const existingProduct = state?.cart.find((item) => item?.id === action.payload)
            if (existingProduct) {
                existingProduct.quantity! -= 1
            }
        },
        // remove from cart 
        removeFromCart: (state, action) => {
            state.cart.filter((item) => item?.id! === action.payload)
        },
        resetCart:(state)=>{
            state.cart=[];

        },
        // add to favorite 
        addToFavorite: (state, action) => {
            const existingProduct = state?.favorite?.find((item) => item?.id !== action.payload.id);
            if (existingProduct) {
                state.favorite = state.favorite.filter((item) => item?.id !== action.payload.id)

            }
            else {
                state.favorite.push(action.payload)
            }
        },
        resetFavorite:(state)=>{
            state.favorite=[];
        }
    }
})

export const { adToCart, increaseQuantity, decreaseQuantity,removeFromCart,resetCart, addToFavorite,resetFavorite} = onlineShopSlice.actions

export default onlineShopSlice.reducer