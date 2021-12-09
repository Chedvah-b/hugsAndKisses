import React, {useState, createContext} from "react";

export const ItemsContext=createContext();

export const ItemsContextProvider=(props)=>{
    const [items,setItems]=useState([]);
    const [selectedItem,setSelectedItem]=useState([]);
    const [total,getTotal]=useState(0);
    const [search,setSearch]=useState("");

    return(
        <ItemsContext.Provider value={{items,setItems,selectedItem,setSelectedItem,total,getTotal,search,setSearch}}>
            {props.children}
        </ItemsContext.Provider>
    )
}