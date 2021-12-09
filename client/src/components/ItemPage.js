import React, { useState,useEffect } from "react";

function ItemPage(id){

    const {items,setItems}=useState([]);
    useEffect(async()=>{
        try {
            const response=await fetch(`http://localhost:5000/${id}`);
            const jsonData=await response.json();
            setItems(jsonData.data.items)
            //setItems(response);
        } catch (error) {
            
        }

    },[])
   /* const [item,setItem]=useState([]);

    function setI(id) {
        const ListAll=async()=>{
            try {
                const response=await fetch(`http://localhost:5000/${id}`);
                const jsonData=await response.json();
                console.log(jsonData);
                setItem(jsonData.data.items);
            } catch (error) {
                console.error(error.message);
            }
        }
    }

    return(
        <div className="item">
            <img className="item-image" src="https://i.ibb.co/5957yqq/pink-1.jpg"/>
            <div className="item-information">
                <h1>
                    Summer Box
                </h1>
                <h3>
                    150
                </h3>
                <button>Add to bag</button>
                <p>
                Includes: romper, soft teddy comforter, dummy chain. Available in blue and green
                </p>
            </div>
        </div>
    )*/
    return(
        <div key={items.id} className="item">
            <img className="item-image" src={items.picture} alt=""/>
            <div className="item-information">
                <h1>
                    {items.name}
                </h1>
                <h3>
                    {items.price}
                </h3>
                <button>Add to bag</button>
                <p>
                {items.description}
                </p>
            </div>
        </div>
            
            
    
    )

}



export default ItemPage;