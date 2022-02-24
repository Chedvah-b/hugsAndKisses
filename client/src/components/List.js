import React, {useContext, useEffect, useState} from "react";
import { ItemsContext } from "../context/ItemsContext";
import { useHistory } from "react-router-dom";
import { getList } from "../service/service";
import { Button, Card, Grid, CardMedia, CardContent, Typography, CardActions, Pagination } from "@mui/material";



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
                    <input  className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
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
                
                <Grid item xs={6} md={3} key={item.id}>
                    <Card sx={{height:'100%', display: 'flex', flexDirection: 'column'}}>
                    
                        <CardMedia
                            component="img"
                            height="220"
                            image={item.picture}
                            alt="item picture"
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

            <Pagination sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt:'40px', mb: '50px'}} count={5} onChange={(e)=>{setPage(e.target.textContent)}} />
        </div>
    )
};

export default List;