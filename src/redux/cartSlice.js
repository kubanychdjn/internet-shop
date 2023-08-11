import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        quantityCart: 0,
        productsCart: []
    },
    reducers: {
        addToCart: (state, action) => {
            const indexProduct = state.productsCart.findIndex(clothing => clothing.id === action.payload.id)
            state.sum += action.payload.price * action.payload.quantity
            if (indexProduct === -1) {
                state.productsCart.push(action.payload)
                state.quantityCart++
            } else {
                state.productsCart[indexProduct].quantity += action.payload.quantity
            }
        },
        deleteProductFromCart: (state, action) => {
            state.productsCart = state.productsCart.filter((p) => p.id !== action.payload)
            // state.sum = state.action.payload === 0 
            
        }
    }
})

export const { addToCart, deleteProductFromCart } = cartSlice.actions
export default cartSlice.reducer