import { Button } from "@mui/material";
import React,{useContext, useState, useEffect} from "react";
import { ItemsContext } from "../context/ItemsContext";
import { orders, ordersList } from "../service/service";
import OrderedItems from "./OrderedItems";


const Orders=()=>{
    const {userId,setUserId}=useContext(ItemsContext);
    const [items,setItems]=useState([]);
    

    const getOrders = async()=>{
        const result=await orders(userId);console.log("order ",result);
        
        setItems(result);
        
    }

   

    useEffect(()=>{
        getOrders();
    },[])

    


return(
    <div className="container" style={{marginTop: '128px'}}>
    <table  >
     <thead>
         <tr style={{textAlign: 'center'}}>
         <th>Order number</th>
         <th>Order date</th>
         <th>Order status</th>
         <th>Total value</th>
         <th>Action</th>
         </tr>
     </thead>
     <tbody>
    {items.map((item)=>
     
         <tr style={{textAlign: 'center'}}>
         <td >
             {item.id}
         </td>
         <td>{item.orderdate}</td>
         
         <td>{item.status}</td>
         <td>{item.totalprice}</td>
         <td>{/*<Button onClick={()=>viewItems(item.id)}>view order</Button>*/}<OrderedItems props={item.id}/></td>
         </tr>
         )}
     </tbody>
     </table>
                 

       </div>
    )
}

export default Orders;