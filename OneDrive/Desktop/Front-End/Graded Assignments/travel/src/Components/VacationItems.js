import React, { useState } from "react";
import {validVacation, newVacation} from "./NewVacationForm";

const VacationsItems = (props) => {
    const [newVacation, setNewVacation] = useState(localStorage.getItem('vacations'));
    
    const addedVacation =  localStorage.getItem('validVacation');

    
    

    


    
    return (
        <section>

                {/* // <li>{addVacation.destination}</li>
                // <li>{addVacation.outdoorActivity}</li>
                // <li>{addVacation.toursActivity}</li>
                // <li>{addVacation.foodActivity}</li>  */}

                   
                <div>{addedVacation}</div>
                
                <div>{newVacation}</div>
            
        </section>
    )

}

export default VacationsItems;