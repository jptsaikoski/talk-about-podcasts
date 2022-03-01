import React from "react";
import "./Base.css";

export default function Base(props) {

    return (
        <>
        <div className="background"></div>

        <div className="base">
            <div className="base__container">
                {props.children}
            </div>
        </div>
        </>
    
    )
}