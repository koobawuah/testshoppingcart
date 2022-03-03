import { createSlice } from '@reduxjs/toolkit';

const products = [
    { name: 'Book', price: 20, quantity: 1 },
    { name: 'Book 2', price: 30, quantity: 1 },
    { name: 'House', price: 100, quantity: 1 },
    { name: 'Property 3', price: 200, quantity: 1 },
    { name: 'Car', price: 140, quantity: 1 },
    { name: 'Motor Bike', price: 99, quantity: 1 }
]

export const productSlice = createSlice({
    name: 'products',
    initialState: products
})

export default productSlice.reducer
