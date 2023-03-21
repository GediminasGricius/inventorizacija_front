import {useContext, useState} from "react";
import ItemsContext from "../../context/ItemsContext";

function ItemNew() {
    const itemsContext=useContext(ItemsContext);

    const newItem={
        no:"",
        name:"",
        location:"",
        user_id:null,
    };

    const [item, setItem]=useState(newItem);

    const change=(event)=>{
        const id=event.target.id;

        setItem({
            ...item,
            [id]:event.target.value
        })
    }

    const add=(event)=>{
        event.preventDefault();
        itemsContext.addItem(item);
        setItem(newItem);
    }

    const userOptions=[];


    itemsContext.users.forEach((user)=>{
        userOptions.push(<option key={user.id==""?0:user.id} value={user.id}>{user.name}</option>)
    })

    console.log(item);
    return (
        <div className="card">
            <div className="card-header">Pridėti naują įrašą</div>
            <div className="card-body">
                <form>
                    <div className="mb-3">
                        <label className="form-label">Numeris</label>
                        <input id="no" type="text" className="form-control" onChange={change} value={item.no} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Pavadinimas</label>
                        <input id="name" type="text" className="form-control" onChange={change} value={item.name}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Vieta</label>
                        <input id="location" type="text" className="form-control" onChange={change} value={item.location}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Atsakingas asmuo:</label>
                        <select id="user_id" className="form-select" onChange={change} value={item.user_id}>
                            {userOptions}
                        </select>
                    </div>
                    <button className="btn btn-success" onClick={add}>Pridėti</button>
                </form>
            </div>
        </div>
    )

}

export default ItemNew;