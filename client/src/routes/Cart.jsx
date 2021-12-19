import React,{useEffect, useState, useContext} from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { ItemsContext } from "../context/ItemsContext";


const Cart=()=>{
    const [LS, setLS] = useState([]);
    //const [a,seta]=useState([]);
    
    const {total}=useContext(ItemsContext);
    

useEffect(() => {
   const tempArr = []
   for (const [key, value] of Object.entries(localStorage)) {
    tempArr.push(JSON.parse(value));
}
   /*for(let i=0; i<localStorage.length; i++) {
    let key = localStorage.key(i);
    //tempArr.push(key);
    tempArr.push(JSON.parse(localStorage.getItem(key)));
  }*/
   
   setLS(tempArr);
   //setTotal(totalAmount());
   //console.log(total);

},[])


const removeItem=(id)=>{
    localStorage.removeItem(id);
    console.log(id);
    setLS(LS.filter(item=>
         item.id!==id
    ))
}


function totalAmount(){ return LS.reduce(
    (previousAmount, currentAmount)=>previousAmount+(currentAmount.price*currentAmount.amount), 
    0);
}

/*useEffect(async()=>{
    const temp=[]
    try {
        for(var i=0;i<LS.length;i+=2){
            const response=await fetch(`http://localhost:5000/${LS[i]}`);
            const jsonData=await response.json();
            temp.push(jsonData.data.items[0]);
        }
        
        seta(temp);
        console.log(a);
    } catch (error) {
        
    }

},[LS])*/

return(
   
   
       <div className="container">
           {console.log("cart",total)}
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

                        





            {LS.map((item) =>  {
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
                        <h1>Total: {total}</h1>
            <Button href="/check-out">go to check out</Button>
            
       </div>
   



   /*a.map((item)=>{
    <div className="item ">
            <img className="item-image" src={item.picture} alt=""/>
            <div className="item-information">
                <h1>
                    {item.name}
                </h1>
                <h3>
                    {item.price} NIS
                </h3>
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button type="button" className="btn btn-outline-success">Add to bag</button>
                </div>
                <p>
                {item.description}
                </p>
            </div>
        </div>
})*/
)
    /*const[c,setC]=useState(localStorage);

    const g=()=>{
        for(let i=0; i<localStorage.length; i++) {
            let key = localStorage.key(i);
            return {key}
          }
    }

   return(c.map((item)=>{

   })
        
   )*/

    //const [c,setC]=useState([]);

    /*const [c,setC]=useState([]);

    useEffect(()=>{
        setC(localStorage);
    },[])

    console.log(localStorage.length);
    
    for (let i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        console.log(key, value);*/

        /*return(
            {localStorage}.map((item)=>(
                <div>
                <h1>{item.key}</h1>
                <h3>{item.value}</h3></div>
            ))
            
        )*/
        /*useEffect(()=>{
            
        for(let i=0; i<localStorage.length; i++) {
            let key = localStorage.key(i);
            setC([...c,key,localStorage.getItem(key)]);
          }},[])
          return(
              c.map((item)=>(
                  <div>
                      <hi>{item}</hi>
                  </div>
              ))
          )
    }
    
        /*return(
            [c].map((item)=>(
                <div>
                    <h1>{item.key}</h1>
                    <h2>{item.value}</h2>
                </div>
            ))
        
        )*/
      
    /*return(
        
        /*<div>
            <h1>Your bag</h1>
            <div className="d-flex flex-row justify-content-around">
                <div>
                <div className="cart-item container">
                    <div>
                        <h6>name</h6>
                    </div>
                    <div className="cart-details">
                        <img src="https://i.ibb.co/85wwnLX/Cosy-baby-gift-box-pink.jpg" alt="Cosy-baby-gift-box-pink" border="0" />
                    
                    
                        <p>description</p>
                        <h6>price</h6>
                        <h6>total</h6>
                    </div>
                    
                </div>

                <div className="cart-item container">
                <img src="https://i.ibb.co/85wwnLX/Cosy-baby-gift-box-pink.jpg" alt="Cosy-baby-gift-box-pink" border="0" />
                <div>
                    <h6>name</h6>
                    <p>description</p>
                    <h6>amount</h6>
                </div>
                <h6>price</h6>
            </div>

            <div className="cart-item container">
                <img src="https://i.ibb.co/85wwnLX/Cosy-baby-gift-box-pink.jpg" alt="Cosy-baby-gift-box-pink" border="0" />
                <div>
                    <h6>name</h6>
                    <p>description</p>
                    <h6>amount</h6>
                </div>
                <h6>price</h6>
            </div>
            
                </div>
            
                <div>
                <a href="/check-out">
                    <button className="btn btn-outline-success" onclick="javascript:window.location='/check-out'">go pay</button></a>
                </div>
            </div>
        </div>   */ 
    //)
}

export default Cart;