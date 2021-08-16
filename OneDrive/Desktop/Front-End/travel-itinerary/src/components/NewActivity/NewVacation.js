import React from "react";
import VacationForm from "./VacationForm";

const NewVacation = (props) => {
    const savedVacationDataHandler = (enteredVacationData) =>{
        const vacationData = {
            ...enteredVacationData,
            id:Math.random().toString()
        }
        console.log(vacationData);
        
        props.onAddVacation(vacationData);
    }
    
        return (

        <div>
        <VacationForm onSubmitNewVacation = {savedVacationDataHandler}/>
            
        </div>
    )
};

export default NewVacation;