import { createSlice } from'@reduxjs/toolkit'

const initialState = {
    wishListItems :  localStorage.getItem("wishListItems") ? JSON.parse(localStorage.getItem("wishListItems")) : [],
    itemQuantity:0,
}

const wishListSlice = createSlice({ 
    name: "wishList",
    initialState,
    reducers:{
        // add items to wishList
        addItemToWishList(state,action){
            const itemIndex = state.wishListItems.findIndex((item)=> item._id === action.payload._id)
            if(itemIndex >= 0){
                state.wishListItems[itemIndex].itemQuantity += 1
            }else{
                const newProduct = {...action.payload, itemQuantity :1}
                state.wishListItems.push(newProduct)
            }
            localStorage.setItem("wishListItems",JSON.stringify(state.wishListItems))
        },
        // remove item from wishlist
        removeItemFromWishList(state,action){
            state.wishListItems = state.wishListItems.filter((item)=>
                                    item._id !== action.payload
            )
            localStorage.setItem("wishListItems",JSON.stringify(state.wishListItems))
        }
    }
})

export const {
    addItemToWishList,
    removeItemFromWishList,
    itemQuantity
} = wishListSlice.actions;
export default wishListSlice.reducer;