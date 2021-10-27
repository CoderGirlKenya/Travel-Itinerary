import React, { useState } from "react";

const VacationsItems = (props) => {
    const [newVacations, setNewVacations] =useState([]);

    


    
    return (
        <section>
                <li >{props.destination}</li>
                <li>{props.outdoorActivity}</li>
                <li>{props.toursActivity}</li>
                <li>{props.foodActivity}</li>    
        </section>
    )

}

export default VacationsItems;