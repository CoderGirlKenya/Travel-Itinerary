import React, { useState } from "react";
import NewVacation from "./Components/NewVacation";
import {INITIAL_VACATIONS} from "./Data/VacationList";
import VacationItem from "./Components/VacationItem";
import Welcome from "./Components/Welcome";
import Necessities from "./Data/Necessities";
import { Fragment } from "react";
import Intro from "./Components/Intro";
import { Switch, BrowserRouter, Route, Redirect} from "react-router-dom";

const App =(props)=>{

  
   const [vacations, setNewVacations] = useState(INITIAL_VACATIONS);
   const addVacationHandler = (vacations) =>{
  //   setNewVacations((prevVacations) =>{
  //     const vacationsList=[vacations, ...prevVacations];
  //     console.log(vacationsList)
  //     return vacationsList;
     }
    
  
  // };
  
    return (
        <Fragment>
           <BrowserRouter>
         <Switch>
          <div>
          <header>
         <Welcome/>
         </header>
        <main> 
        <Route path="/">
        <Redirect to="/intro"/>
        </Route>
        <Route path="/intro">
        <Intro/>
        </Route>
        <Route path="/newVacation">
        <NewVacation item={vacations} onAddVacation={addVacationHandler} />
        </Route>
        <Route path="/vacationItem"> 
        {vacations.map(vacation => (
        <VacationItem 
        key={vacation.destination}
        id={vacation.destination}
        destination={vacation.destination} 
        outdoors={vacation.outdoorsActivity}
        tours={vacation.toursActivity}
        food={vacation.foodActivity}
       /> 
        ))} 
         </Route>
        <Route path="/necessities">
          <Necessities/>
        </Route>
         
        </main>
        </div>
        </Switch>
      </BrowserRouter>
       </Fragment> 
    )
    
}

export default App;