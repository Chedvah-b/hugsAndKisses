import React,{useEffect, useContext} from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { ItemsContext } from "../context/ItemsContext";
import {Link} from "react-router-dom";
import LogIn from "./LogIn";

const Cart=()=>{
    const {cartItems,setCartItems} = useContext(ItemsContext);
    const {total,setTotal}=useContext(ItemsContext);
    const {userId,setUserId}=useContext(ItemsContext);
    

useEffect(() => {
   const storeLocalStorage = [];
   for (const [key, value] of Object.entries(localStorage)) {
       storeLocalStorage.push(JSON.parse(value));
    }
    setCartItems(storeLocalStorage);
    setTotal(totalAmount());
    },[])


const removeItem=(id)=>{
    if(localStorage.length>0){
        const newTotal=total-JSON.parse(localStorage.getItem(id)).price*JSON.parse(localStorage.getItem(id)).amount;
        setTotal(newTotal);
    }
    else{
        setTotal(0);
    }
    localStorage.removeItem(id);
    
    setCartItems(cartItems.filter(item=>
         item.id!==id
    ))
}


function totalAmount(){ return cartItems.reduce(
    (previousAmount, currentAmount)=>previousAmount+(currentAmount.price*currentAmount.amount), 
    0);
}
var bbb;
const checkIfLoggedIn=()=>{
    if(userId===0){console.log("id===0");
        return false;
    }
    return true;
}

return(
       <div className="container">
           <Table  bordered >
            <thead>
                <tr>
                <th>PRODUCT</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>REMOVE</th>
                </tr>
            </thead>
            <tbody>

            {cartItems.map((item) =>  {
                return(
                <tr key={item.id}>
                <td>
                    <img width="100px" src={item.picture} alt=""/>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                </td>
                <td>{item.price}</td>
                <td>{item.amount}</td>
                <td><Button onClick={()=>removeItem(item.id)}>remove</Button></td>
                </tr>)})}
                
            </tbody>
            </Table>
                        <h1>Total: {totalAmount()}</h1>
                        {checkIfLoggedIn() ?
<Link to="/check-out"><Button>go to check out</Button></Link> 
    :
<Link to="/login"><Button>go to check out</Button></Link>}
                 
       </div>
    )
}

export default Cart;