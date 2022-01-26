import React, {useContext, useEffect} from "react";
import { ItemsContext } from "../context/ItemsContext";
import { useHistory } from "react-router-dom";
import { getList } from "../service/service";
import Button from '@mui/material/Button';

const List=()=>{
    const {items,setItems}=useContext(ItemsContext);
    const {search,setSearch}=useContext(ItemsContext);
    let history = useHistory();

    const fetchData=async()=>{
        try {
            const list=await getList();
            setItems(list);
        } catch (error) {
            console.log(error)
        }}

    useEffect(()=>{
        fetchData();
    },[])

    const viewItem=(id)=>{
        history.push(`/item/${id}`);
    }
    
    return(
        <div style={{marginTop: '138px'}}>
            <div className="container" style={{width:"30%"}}>
                <div className="d-flex">
                    <input onChange={(e)=>{setSearch(e.target.value)}} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    {/*<button onClick={()=>setSearch(search)} className="btn btn-outline-success" type="submit">Search</button>*/}
                </div>
            </div>
            <div className="item-list">
                {items.filter((item)=>{
                if(search===""){
                    return item;
                }
                else if(item.name.toLowerCase().includes(search.toLowerCase())){
                    return item;
                }
                }).map((item)=>
                <div key={item.id} className="card container">
                    <img className="card-img-top" src={item.picture} alt=""/>
                    <div className="card-body">
                        <h3 className="card-title">
                            {item.name}
                        </h3>
                        <h5>
                            {item.price} NIS
                        </h5>
                        {/*<p className="card-text">
                        {item.description}
                        </p>*/}
                        

                        <div className="d-grid gap-2 col-6 mx-auto">
                        <button className="btn btn-dark" onClick={()=>viewItem(item.id)}>view</button></div>
                    </div>
                </div>
                )
                }
            </div>
        </div>
    )
};

export default List;