import React, {useContext, useEffect} from "react";
import { ItemsContext } from "../context/ItemsContext";
import { useHistory } from "react-router-dom";

const List=(props)=>{
    const {items,setItems}=useContext(ItemsContext);
    const {search,setSearch}=useContext(ItemsContext);
    let history = useHistory();


    useEffect(()=>{
        const fetchData=async()=>{
        try {
            const response=await fetch("http://localhost:5000/list");
            const jsonData=await response.json();
            setItems(jsonData.data.items);
        } catch (error) {
            
        }}
        fetchData()
    },[])

    const viewItem=(id)=>{
        
        history.push(`/item/${id}`);
    }
    /*const filterById=((jsonObject, id)=>{
        return jsonObject.filter(function(jsonObject) {return (jsonObject['id'] == id);})[0];})*/
    

    /*const [i,setI]=useState([])
    const ListAll=async()=>{
        try {
            const response=await fetch("http://localhost:5000/item");
            const jsonData=await response.json();
            console.log(jsonData);
            //filterById(jsonData,1);
            setI(jsonData);
            
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(()=>{
        ListAll();
    },[]);*/
    return(
        
        <div>
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


                        <button className="btn btn-outline-primary" onClick={()=>viewItem(item.id)}>view</button></div>
                    </div>
                </div>
        
                )
            
                }
            </div>
        </div>
            )

};

export default List;