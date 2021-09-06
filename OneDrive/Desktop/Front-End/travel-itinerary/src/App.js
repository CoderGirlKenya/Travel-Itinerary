import Necessities from "./components/Necessities";
import React, { useState } from "react";
import Vacation from "./components/Vacation";
import NewVacationForm from "./components/NewActivity/NewVacationForm";
import { initialVacations} from "./components/VacationsList";





function App() {
  const [vacations, setNewVacations] = useState(initialVacations);
  // const [enteredDestination, setEnteredDestination] = useState("");
  // const [enteredActivity, setEnteredActivity] = useState("");
  // const [selectedType, setSelectedType] = useState({});
  // console.log(initialVacations);
  const addNewVacationHandler = (vacations) => {
    setNewVacations((prevVacation) => {
      return [...prevVacation, vacations]
    }

 
  );
  };

  return (
    <div>
      <h2>TRAVEL PLANNER</h2>
      <NewVacationForm items={vacations} addToPlanner={addNewVacationHandler}/>
      <Vacation items={vacations} />

      <Necessities></Necessities>
    </div>
  );
}

export default App;
