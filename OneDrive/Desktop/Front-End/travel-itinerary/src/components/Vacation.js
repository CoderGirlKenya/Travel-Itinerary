import VacationItem from "./VacationItem";
import React,{useState} from "react";

function Vacation (props) {
  
    return (
        <form>
        <div>
        {props.items.map(vacations => (
        <VacationItem
        key = {vacations.id}
        destination = {vacations.destination} 
        type = {vacations.type}
        outdoors={vacations.type.outdoors}
        tours = {vacations.type.tours}
        food = {vacations.type.food}
        
        />
        ))}

            )
        
        </div>
        </form>
    )
};


export default Vacation;