import React, {useState, createContext} from "react";

export const ItemsContext=createContext();

export const ItemsContextProvider=(props)=>{
    const [items,setItems]=useState([]);
    const [selectedItem,setSelectedItem]=useState([]);
    const [total,setTotal]=useState(0);
    const [search,setSearch]=useState("");
    const [cartItems,setCartItems]=useState([]);
    const [userId,setUserId]=useState(0);
    const [userName,setUSerName]=useState("Log In");

    return(
        <ItemsContext.Provider value={{items,setItems,selectedItem,setSelectedItem,total,setTotal,search,setSearch,cartItems,setCartItems,userId,setUserId,userName,setUSerName}}>
            {props.children}
        </ItemsContext.Provider>
    )
}