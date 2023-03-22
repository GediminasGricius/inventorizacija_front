import {useContext, useEffect, useState} from "react";
import ItemsList from "./items/ItemsList";
import ItemNew from "./items/ItemNew";
import ItemEdit from "./items/ItemEdit";
import ItemsContext from "../context/ItemsContext";

function Inventorizacija() {
    const itemsContext=useContext(ItemsContext);

    let itemAction;

    if (itemsContext.itemEdit===null){
        itemAction=<ItemNew></ItemNew>;
    }else{
        itemAction=<ItemEdit item={itemsContext.itemEdit}></ItemEdit>;
    }
    return (
        <div className="row mt-5">
            <div className="col-md-8">
                <ItemsList></ItemsList>
            </div>
            <div className="col-md-4">
                { itemAction }

            </div>
        </div>
    );
}


export default Inventorizacija;