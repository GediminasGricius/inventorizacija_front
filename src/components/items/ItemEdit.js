import {useContext, useState} from "react";
import ItemsContext from "../../context/ItemsContext";

function ItemEdit(props) {
    const itemsContext=useContext(ItemsContext);


    const [item, setItem]=useState(props.item);

    const change=(event)=>{
        const id=event.target.id;

        setItem({
            ...item,
            [id]:event.target.value
        })
    }

    const save=(event)=>{
        event.preventDefault();
        itemsContext.updateItem(item);
        itemsContext.setItemEdit(null);
    }

    const userOptions=[];


    itemsContext.users.forEach((user)=>{
        userOptions.push(<option key={user.id==""?0:user.id} value={user.id}>{user.name}</option>)
    })

    const cancel=()=>{
        itemsContext.setItemEdit(null);
    }

    //console.log(item);
    return (
        <div className="card">
            <div className="card-header">Įrašo redagavimas</div>
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
                        <input id="location" type="text" className="form-control" onChange={change}  value={item.location}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Atsakingas asmuo:</label>
                        <select id="user_id" className="form-select" onChange={change} value={item.user_id}>
                            {userOptions}
                        </select>
                    </div>
                    <button className="btn btn-success" onClick={save} >Išsaugoti</button>
                    <button className="btn btn-primary float-end" onClick={cancel} >Atšaukti</button>
                </form>
            </div>
        </div>
    )

}

export default ItemEdit;