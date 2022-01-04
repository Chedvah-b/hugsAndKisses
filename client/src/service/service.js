const host="http://localhost:5000";

async function getList(){
    const response=await fetch(`${host}/list`);
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

async function checkout(userId, itemId, amount){
    const data={
        userId: userId,
        itemId: itemId,
        amount: amount
    };
    await fetch(`${host}/checkout`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
}

export {getList, getItem, addNewCustomer, checkLogIn, checkout};