import React from "react";
import { INITIAL_VACATIONS } from "../Data/VacationList";
import NewVacationForm from "./NewVacationForm";
import { useHistory } from "react-router-dom";
const NewVacation = (props) => {
   
        const history =useHistory();
        console.log(history);
    
    return(
            <NewVacationForm key={INITIAL_VACATIONS.id}/>
        
    )
}
export default NewVacation;

