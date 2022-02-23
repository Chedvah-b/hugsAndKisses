import React, {useContext, useEffect, useState} from "react";
import { ItemsContext } from "../context/ItemsContext";
import { useHistory } from "react-router-dom";
import { getList } from "../service/service";
import Button from '@mui/material/Button';
import { Card, Grid, CardActionArea, CardMedia, CardContent, Typography, CardActions, Pagination, PaginationItem } from "@mui/material";



const List=()=>{
    const {items,setItems}=useContext(ItemsContext);
    const {search,setSearch}=useContext(ItemsContext);
    const [page, setPage]=useState(1);

    let history = useHistory();

    const fetchData=async(page)=>{
        try {
            const list=await getList(page);
            setItems(list);
        } catch (error) {
            console.log(error)
        }}

    useEffect(()=>{
        fetchData(page);window.scroll(0,0);
    },[page])

    const viewItem=(id)=>{
        history.push(`/item/${id}`);
    }
    
    return(
        <div >
            
            <div className="container" style={{width:"30%", paddingBottom: '2.5rem'}}>
                <div className="d-flex">
                    <input onChange={(e)=>{setSearch(e.target.value)}} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    {/*<button onClick={()=>setSearch(search)} className="btn btn-outline-success" type="submit">Search</button>*/}
                </div>
            </div>
            <Grid container spacing={2}>
            {items.filter((item)=>{
                if(search===""){
                    return item;
                }
                else if(item.name.toLowerCase().includes(search.toLowerCase())){
                    return item;
                }
                }).map((item)=>
                
                <Grid item xs={6} md={3}>
                    <Card sx={{height:'100%', display: 'flex', flexDirection: 'column'}}>
                    
                        <CardMedia
                            component="img"
                            height="220"
                            image={item.picture}
                            alt="green iguana"
                            />
                            <CardContent sx={{height:'35%'}}>
                            <Typography gutterBottom variant="h5" component="div">
                                {item.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {item.price} NIS
                            </Typography>
                            </CardContent>
                            
                        <CardActions>
                            <Button  size="small" color="primary" onClick={()=>viewItem(item.id)}>
                            View Item
                        </Button>
                    </CardActions>
                    </Card>
                </Grid>
                )}
            </Grid>





            {/*<div className="container" style={{width:"30%"}}>
                <div className="d-flex">
                    <input onChange={(e)=>{setSearch(e.target.value)}} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    {/*<button onClick={()=>setSearch(search)} className="btn btn-outline-success" type="submit">Search</button>}
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
                        </p>
                        

                        <div className="d-grid gap-2 col-6 mx-auto">
                        <button className="btn btn-dark" onClick={()=>viewItem(item.id)}>view</button></div>
                    </div>
                </div>
                )
                }
            </div>*/}
            <Pagination sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt:'40px', mb: '50px'}} count={5} onChange={(e)=>{setPage(e.target.textContent)}} />
        </div>
    )
};

export default List;