import {useEffect, useState} from "react";
import Item from "./Item";

function ItemsList(){
    const [items, setItems] = useState([])


    const load=()=>{
        fetch('http://localhost:8000/api/items')
            .then((response)=>{
                return response.json()
            }).then((data)=>{
            setItems(data);
        });
    };
    useEffect(()=>{
        load();
    },[]);
    const itemsList=[];
    items.forEach((item)=>{
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