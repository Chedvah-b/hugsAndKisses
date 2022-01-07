import React from "react";
import {Link} from "react-router-dom";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navigator=()=>{

    return (
        <nav key="1" className="navbar sticky-top bg-white navbar-light">
            <div key="2" className="container-fluid">
                <div>
                    <Link className="navbar-brand" to="/">
                        <img src="https://i.ibb.co/jWRB1gJ/logo.png" alt="logo" border="0"/>
                    </Link>
                    <Link className="navbar-brand" to="/">Home</Link>
                </div>
                <Link to="/login"><button ><AccountCircleIcon />Log In</button></Link>
                {/*<SignUp />
                <LogIn />*/}
                <div key="3" className="d-flex justify-content-evenly align-items-center">
                    <Link className="navbar-brand ms-2" to="/cart">
                        <img width="30px" src="https://i.ibb.co/gj6GX58/shopping-bag.png" alt="shopping-bag" border="0" />
                    </Link>
                </div>                
                
            </div>
        </nav>
    );    
}

export default Navigator;