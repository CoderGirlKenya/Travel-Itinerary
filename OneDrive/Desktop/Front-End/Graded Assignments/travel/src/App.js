import VacationItems from './Components/VacationItems';
import React, {useState, useEffect} from 'react';
import NewVacationForm from './Components/NewVacationForm';
import Header from './Components/Header';
import {BrowserRouter} from 'react-router-dom';
import Intro from './Data/Intro';
import Necessities from './Data/Necessities';
import NotFound from './Components/NotFound';
import { Route,Redirect,Switch } from 'react-router';

const INITIAL_VACATIONS = [
  {
      id:"Las Vegas",
      destination: "Las Vegas",
        outdoorsActivity:"Marvel Avengers S.T.A.T.I.O.N at Treasure Island Hotel and Casino",
        toursActivity:"Big Bus Las Vegas Hop-on Hop-off Open Top Tour",
        foodActivity:"Downtown Vegas Sightseeing and Foodie Tour",
    },
    {
      id: "New York",
      destination: "New York",
        outdoorsActivity: "Bronx Zoo",
        toursActivity: "7 Hours Boroughs Tour",
        foodActivity: "Taste of NYC Tour",
    },
    {
      id: "Denver",
      destination: "Denver",
        outdoorsActivity:"Beyond Light Show and Meditation",
        toursActivity: "Whiskey, History and Outlaws Tour",
        foodActivity: "The Dinner Detective Murder Mystery Dinner Show",
    },
  ]

    
  
const App = (props) => {
 const [vacations, setVacations] = useState(INITIAL_VACATIONS);
 
 localStorage.setItem('vacations', JSON.stringify(vacations)); 
                


  return (
    
  <BrowserRouter>
    <div>
      <Header/>
    </div>
        <Switch>
      
           <Route path = "/" component={Intro} exact/>

          <Route path="/vacationItems" component={VacationItems}>   
          {/* {vacations.map(vacation => (  */}
         <VacationItems 
           key={vacations.destination}
           id={vacations.destination}
           destination={vacations.destination}
           outdoorsActivity={vacations.outdoorsActivity}
           toursActivity={vacations.toursActivity}
           foodActivity={vacations.foodActivity}
           />
           {/* ))}   */}
           </Route>

           <Route path="/newVacationForm" component={NewVacationForm}/>

           <Route path='/necessities' component={Necessities}/>

            <Route component={NotFound}>
            <Redirect to="/"/>
            </Route>
        
        </Switch>
        
     </BrowserRouter>
  )
}

export default App;
