import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { ItemsContext } from "../context/ItemsContext";


const ItemDetailPage=()=>{
    const {id}=useParams();
    const {selectedItem,setSelectedItem}=useContext(ItemsContext);

    const addToBag=()=>{
        var key={id}.id;
        if(JSON.parse(localStorage.getItem(key))){
            var item = JSON.parse(localStorage.getItem(key)).amount;
            localStorage.setItem(key, JSON.stringify({"id":selectedItem.id,"amount":item+1,"picture":selectedItem.picture,"name":selectedItem.name,"price":selectedItem.price,"description":selectedItem.description}));
        }
        else{
            localStorage.setItem(key, JSON.stringify({"id":selectedItem.id,"amount":1,"picture":selectedItem.picture,"name":selectedItem.name,"price":selectedItem.price,"description":selectedItem.description}));
        }
  
    }

    useEffect(()=>{
        const fetchData=async()=>{
            try {
                const response=await fetch(`http://localhost:5000/item/${id}`);
                
                const jsonData=await response.json();
                
                setSelectedItem(jsonData.data.items[0]);
            } catch (error) {
                
            }
           
        }
        fetchData();
    },[])
    return(
        <div className="item ">
            <img className="item-image" src={selectedItem.picture} alt=""/>
            <div className="item-information">
                <h1>
                    {selectedItem.name}
                </h1>
                <h3>
                    {selectedItem.price} NIS
                </h3>
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button onClick={addToBag} type="button" className="btn btn-outline-success">Add to bag</button>
                </div>
                <p>
                {selectedItem.description}
                </p>
            </div>
        </div>
    )
}

export default ItemDetailPage;