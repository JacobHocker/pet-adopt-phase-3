import React from "react";

function Dogs({ name, breed }) {
    return(
        <div>
            <h3>{name}</h3>
            <p>{breed}</p>
        </div>
    )
}

export default Dogs;