import { createContext, useContext, useEffect, useMemo, useState } from "react";
const API_BASE="http://localhost:3000"

const CartContext=createContext(null);

export function CartProvider({children}){
  const [cartItem,setCartItem]=useState([]);
  const USER_ID=1

   const fetchCart= async()=>{

    const res=await fetch(`${API_BASE}/cart?userId=${USER_ID}`);
    const data=await res.json();
    setCartItem(data);

   }

   const addToCart= async(product)=>{
   console.log("product",product)


    const existing=cartItem.find((item)=>item.productId===product.id);
    if(existing){
      await updateQuantity(existing.id,existing.quantity+1,product.price)
    }else{
       await fetch(`${API_BASE}/cart`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            userId:USER_ID,
            productId:product.id,
            quantity:1,
            price:product.price,
            addedAt:new Date()
        })
       })
    }
    fetchCart();
   }

   const updateQuantity= async(cartId,newQty,price)=>{
    console.log(cartId,newQty,price)
    const body={quantity:newQty};
    if(price !==undefined){
        body.price=price;
    }
     
    await fetch(`${API_BASE}/cart/${cartId}`,{
        method:"PATCH",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(body),
    })
   fetchCart();
   }

   const removeFromCart=async(cartId)=>{
   await fetch(`${API_BASE}/cart/${cartId}`,{
        method:"DELETE",
     
    })
   fetchCart();
   }


   const {totalQty,totalAmount}=useMemo(()=>{
      return cartItem.reduce((acc,item)=>{
        acc.totalQty+=item.quantity;
        acc.totalAmount+=item.quantity*(item.price||0);
        return acc
      },{totalQty:0,totalAmount:0});
   },[cartItem])



   useEffect(()=>{
    fetchCart();
   },[])






    return <CartContext.Provider value={{cartItem,addToCart,updateQuantity,removeFromCart,totalQty,totalAmount}} >{children}</CartContext.Provider>;
}

export const useCart=()=>useContext(CartContext);