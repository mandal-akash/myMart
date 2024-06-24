import {createAsyncThunk ,  createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("items" , async () =>{
    const response = await fetch("https://fakestoreapi.com/products")
    const result = await response.json();
    return result
})

const STATUSES = {
    IDLE: "idle",
    ERROR: "error",
    LOADING: "loading"
}

export const productSlice = createSlice({
    name: "products",
    initialState: {
        data:[],
        status: STATUSES.IDLE,
        singelProduct: {}
    },
     extraReducers:(builder) => {
        builder.addCase(fetchProducts.pending , (state) =>{
            state.status = STATUSES.LOADING;
        })
        .addCase(fetchProducts.fulfilled , (state , action) =>{
            state.data = action.payload;
            state.status = STATUSES.IDLE;
        })
        .addCase(fetchProducts.rejected , (state) =>{
            state.status = STATUSES.ERROR;
        })
     }
})

export default productSlice.reducer;