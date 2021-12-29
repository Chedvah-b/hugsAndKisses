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

export {getList, getItem};