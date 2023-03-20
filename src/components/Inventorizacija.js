import {useEffect, useState} from "react";
import ItemsList from "./items/ItemsList";

function Inventorizacija() {

    return (
        <div className="row mt-5">
            <div className="col-md-8">
                <ItemsList></ItemsList>
            </div>
            <div className="col-md-4">

            </div>
        </div>
    );
}


export default Inventorizacija;