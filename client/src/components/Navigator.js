import React,{useContext, useEffect, useState} from "react";
import LogIn from "./LogIn";
import { ItemsContext } from "../context/ItemsContext";
import SignUp from "./SignUp";


const Navigator=()=>{
    //const {items,setItems}=useContext(ItemsContext);
    //const {search,setSearch}=useContext(ItemsContext);
    /*const [s,setS]=useState("");

    useEffect(()=>{
        items.filter((item)=>{
            return item.includes(s);
        })
    },[s])*/

    /*const handle=(e)=>{
        if (e.key === 'Enter') {
            setS(e.target.value);
            items.filter((item)=>{
                return item.toLowerCase().includes(s);
            })
            console.log(s);
            /*items.filter(item=>{
                return item.name.toLowerCase().includes(e.target.value);
            })*//*
            document.getElementsByTagName("h3").filter((item)=>{
                return item.toLowerCase().includes(e.value);
            })
          }
    }*/

    return (
        <nav key="1" className="navbar sticky-top bg-white navbar-light">
            <div key="2" className="container-fluid">
                <div>
                    <a className="navbar-brand" href="/">
                        <img src="https://i.ibb.co/jWRB1gJ/logo.png" alt="logo" border="0"/>
                    </a>
                    <a className="navbar-brand" href="/">Home</a>
                </div>
                
                

                <div key="3" className="d-flex justify-content-evenly align-items-center">
        
                    <a className="navbar-brand ms-2" href="/cart">
                        <img width="30px" src="https://i.ibb.co/gj6GX58/shopping-bag.png" alt="shopping-bag" border="0" />
                    </a>
                </div>                
                
            </div>
        </nav>


    /*<nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
        <a className="navbar-brand" href="/">
            <img src="https://i.ibb.co/jWRB1gJ/logo.png" alt="logo" border="0" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>         
            </ul>
        <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        <span className="navbar-text flex-end">
        
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-end">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Sign in</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                    <img src="https://i.ibb.co/fSqDjmw/Hugs-Kisses-5.png" width="30px" alt="Hugs-Kisses-5" border="0" />
                    </a>
                </li>
        
        
            </ul>
      </span>
        
            
        </div>
        </div>
    </nav>*/
    );
    
}



export default Navigator;