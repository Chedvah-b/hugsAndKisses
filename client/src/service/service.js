const host="http://localhost:5000";

async function getList(page){
    const response=await fetch(`${host}/list/${page}`);
    const jsonData=await response.json();
    return jsonData.data.items||[];
}

async function getItem(id){
    const response=await fetch(`${host}/item/${id}`);
    const jsonData=await response.json();
    return jsonData.data.items[0]||[];
}

async function addNewCustomer(firstName,lastName,phone,email,password){
    const data = { 
        firstName:firstName,
        lastName:lastName,
        phone:phone,
        email:email,
        password:password };
    await fetch(`${host}/newCustomer`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(data),
    });
}

async function checkLogIn(email,password){
    const response=await fetch(`${host}/logIn/${email}/${password}`);
    const jsonData=await response.json();
    return jsonData;//.status;
}

async function checkout(userId, status, totalPrice){
    const data={
        userId: userId,
        status: status,
        totalPrice: totalPrice
    };
    const response=await fetch(`${host}/checkout`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    const jsonData=await response.json();
    return jsonData.data.id||[];
}

async function orderItem(orderId, itemId, amount){
    const data={
        orderId: orderId,
        itemId: itemId,
        amount: amount
    };
    const response=await fetch(`${host}/orderItem`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
}

async function orders(userId){
    const response=await fetch(`${host}/orders/${userId}`);
    const jsonData=await response.json();
    return jsonData.data.items||[];
}

async function ordersList(orderId){
    const response=await fetch(`${host}/ordersList/${orderId}`);
    const jsonData=await response.json();
    return jsonData.data.items||[];
}

export {getList, getItem, addNewCustomer, checkLogIn, checkout, orderItem, orders, ordersList};