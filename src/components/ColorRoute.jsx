import React from "react";
import {useParams} from "react-router-dom";

const ColorRoute = (props) => {
    const {word,color1,color2} = useParams();

    const enteredData = () => {
        if (isNaN(+ word)){
            return(
                <h1 style={{
                    color:color1,
                    backgroundColor:color2
                }}>
                    The word is: {word}
                </h1>
            )
        }else{
            return(
                <h1 style={{
                    color:color1,
                    backgroundColor:color2
                }}>
                    The number is: {word}
                </h1>
            )
        }
    }

    return (
        <div className="APP">
            {enteredData()}

        </div>
    )
}

export default ColorRoute