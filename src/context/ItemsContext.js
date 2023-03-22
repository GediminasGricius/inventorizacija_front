import React, {useEffect, useState} from "react";

const ItemsContext = React.createContext({
   items:[
       {
           no:"",
           name:"",
           location:"",
           user_id:null
       }
   ],
    users:[
        {
            id:0,
            name:"",
            email:""
        }
    ],
    addItem:(item)=>{},
    load:()=>{},
    deleteItem:()=>{},
    itemEdit:null,
    setItemEdit:(item)=>{},
    updateItem:(item)=>{},
});

export const ItemsContextProvider=(props)=>{
    const [items,setItems]=useState([]);
    const [users,setUsers]=useState([]);
    const [itemEdit,setItemEdit]=useState(null);

    const load=()=>{
        fetch('http://localhost:8000/api/items')
            .then((response)=>{
                return response.json()
            }).then((data)=>{
                setItems(data);
            });

        fetch('http://localhost:8000/api/users')
            .then((response)=>{
                return response.json()
            }).then((data)=>{
                const newUsers=[];
                newUsers.push({
                    id:'',
                    name:'-',
                    email:''
                });
                data.forEach((user)=>{
                    newUsers.push({
                        id:user.id,
                        name:user.name,
                        email:user.email
                    })
                })
               // console.log(newUsers);
                setUsers(newUsers);
            });
    };
    useEffect(()=>{
        load();
       // console.log("load");
    },[]);

    const addItem=(item)=>{
        fetch("http://localhost:8000/api/items",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(item),
        }).then(()=>{
           load();
        });
    }
    const updateItem=(item)=>{
        fetch("http://localhost:8000/api/items/"+item.id,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(item),
        }).then(()=>{
            load();
        });
    }
    const deleteItem=(index)=>{
        fetch("http://localhost:8000/api/items/"+index,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({}),
        }).then(()=>{
            load();
        });
    }
    return (
        <ItemsContext.Provider value={{
            items:items,
            users:users,
            addItem:addItem,
            load:load,
            deleteItem:deleteItem,
            itemEdit: itemEdit,
            setItemEdit: setItemEdit,
            updateItem:updateItem,
        }}>
             {props.children}
        </ItemsContext.Provider>
    );
}

export default ItemsContext;