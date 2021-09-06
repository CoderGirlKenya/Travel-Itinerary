import Necessities from "./Data/Necessities";
import React, { useState } from "react";
import NewVacationForm from "./Components/NewVacationForm";
import {INITAL_VACATIONS} from "./Data/VacationList";
import VacationList from "./Data/VacationList";
import VacationItem from "./Data/VacationItem";

const App =()=>{
  const [vacations, setNewVacations] = useState(INITAL_VACATIONS);
  // const [enteredDestination, setEnteredDestination] = useState("");
  // const [enteredActivity, setEnteredActivity] = useState("");
  // const [selectedType, setSelectedType] = useState({});
  // console.log(initialVacations);
  
  
    return (
        <form>
        <div>
        {VacationList.INITAL_VACATIONS.map(vacations => (
        <VacationItem
        id = {vacations.id}
        destination = {vacations.destination} 
        activityType = {vacations.activityType}
        // outdoors={vacations.type.outdoors}
        // tours = {vacations.type.tours}
        // food = {vacations.type.food}
        
        />
        ))} 
         
        
        </div>
        </form>
    )
    
};
//   return (
//     <div>
//       <h2>TRAVEL PLANNER</h2>
//       <NewVacationForm items={vacations} addToPlanner={addNewVacationHandler}/>
//       <Vacation items={vacations}></Vacation>
//       <Necessities/>
//     </div>
//   );
export default App;