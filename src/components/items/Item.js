import {useContext} from "react";
import ItemsContext from "../../context/ItemsContext";

function Item(props){
    const itemsContext=useContext(ItemsContext);
    const del= ()=>{
        itemsContext.deleteItem(props.item.id);
     };
    const edit=()=>{
        itemsContext.setItemEdit(props.item);
    }
    let editButton="";
    if (itemsContext.itemEdit===null){
        editButton=<button className="btn btn-success" onClick={edit}>Redaguoti</button>;
    }else{

    }

    return (
        <tr key={props.item.id}>
            <td>{props.item.no}</td>
            <td>{props.item.name}</td>
            <td>{props.item.location}</td>
            <td>{props.item.user!=null?props.item.user.name+" ("+props.item.user.email+")" :"-" } </td>
            <td>{editButton}</td>
            <td><button className="btn btn-danger"  onClick={del}> Trinti</button></td>
        </tr>
    );
 }

 export default Item;