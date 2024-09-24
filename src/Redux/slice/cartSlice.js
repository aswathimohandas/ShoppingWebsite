import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartlistSlice=createSlice({
    name:'cart',
    initialState:{
        cart:[]
    },
    reducers:{
        addToCart(state,action){
            const existing=state.cart.find(item=>item.id==action.payload.id)
            if(existing){
               
                existing.quantity+=1
                state.cart=state.cart.filter(item=>item.id!=action.payload.id)
                state.cart.push(existing)
                toast.success("Item quantity increased!!!")
            }
            else{
                const product=action.payload
                product.quantity=1
                state.cart.push(product)
                toast.success("product added to cart")
            }
        },
        removeFromCart(state,action){
           state.cart=state.cart.filter(item=>item.id!=action.payload)
           toast.success("Items removed!!")
        },
        increaseQuantity(state,action){
            const existing=state.cart.find(item=>item.id==action.payload)
            existing.quantity++
        },
        decreaseQuantity(state,action){
            const existing=state.cart.find(item=>item.id==action.payload)
            
            if(existing.quantity==1){
                state.cart=state.cart.filter(item=>item.id!=action.payload)
            }
            else{
                existing.quantity--
            }
        },
        checkOut(state,action){
            state.cart=[]
            toast.success("cart checked out!!!!")
        }

    }

})

export default cartlistSlice.reducer
export const {addToCart,removeFromCart,increaseQuantity,decreaseQuantity,checkOut}=cartlistSlice.actions