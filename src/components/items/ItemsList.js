import {useContext, useEffect, useState} from "react";
import Item from "./Item";
import ItemsContext from "../../context/ItemsContext";

function ItemsList(){
    const itemsContext=useContext(ItemsContext);

    const itemsList=[];
    itemsContext.items.forEach((item)=>{
        itemsList.push(<Item key={item.id} item={item}></Item>);
    });

    return (
        <div className="card">
            <div className="card-header">Inventorizacijos sąrašas</div>
            <div className="card-body">
                <table className="table">
                    <thead>
                    <tr>
                        <th>Numeris</th>
                        <th>Pavadinimas</th>
                        <th>Vieta</th>
                        <th>Atsakingas asmuo</th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {itemsList}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ItemsList;