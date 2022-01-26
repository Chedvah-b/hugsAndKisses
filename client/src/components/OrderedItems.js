import { Button, Dialog, DialogTitle, List, ListItem, ListItemText, ListItemAvatar, Avatar } from "@mui/material";
import React, {useState, useEffect} from "react";
import { ordersList } from "../service/service";
import {Link} from "react-router-dom";

const OrderedItems = (props)=>{
    const [list,setList]=useState([]);
    const [open,setOpen]=useState(false);

    const openD=()=>{
        setOpen(true);
    }

    const handleClose = () => {
      setOpen(false);
    };

    const viewItems = async(orderId)=>{
        const item=await ordersList(orderId);console.log("my order",item);setList(item)
    }

    useEffect(()=>{
        viewItems(Number(props.props));
    },[])

    return(
        <div>
            <Button onClick={()=>openD()}>view items</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>your order</DialogTitle>
                <List>
                  {list.map((item)=>(
                    <Link className="navbar-brand" to={`/item/${item.id}`}>
                    <ListItem key={item.id}>
                      <img width={'50px'} src={`${item.picture}`}/>
                      <ListItemText sx={{padding: '10px'}}>{item.name}</ListItemText>
                      <ListItemText sx={{padding: '10px'}}>X {item.amount}</ListItemText>
                    </ListItem></Link>
                  ))}
                </List>

                {list.map((item)=>{
                    <p>ppppp{item.name}</p>
                })}
            </Dialog>
        </div>
    )


}
export default OrderedItems;

/*
const emails = ['username@gmail.com', 'user02@gmail.com'];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Set backup account</DialogTitle>
      <List sx={{ pt: 0 }}>
        {emails.map((email) => (
          <ListItem button onClick={() => handleListItemClick(email)} key={email}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={email} />
          </ListItem>
        ))}

        <ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Add account" />
        </ListItem>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Typography variant="subtitle1" component="div">
        Selected: {selectedValue}
      </Typography>
      <br />
      <Button variant="outlined" onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}*/