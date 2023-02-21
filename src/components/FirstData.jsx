import React from "react";
import {useParams} from "react-router-dom";

const FirstData = (props) => {
    const {data} = useParams();

    const enteredData = () => {
        if (!isNaN(+ data)){
            return "The number is: "+ data;
        } else{
            return "The word is: "+ data;
        }
    }



    return (
        <div className="APP">
            <h1>{enteredData(data)}</h1>

        </div>
    )
}

export default FirstData