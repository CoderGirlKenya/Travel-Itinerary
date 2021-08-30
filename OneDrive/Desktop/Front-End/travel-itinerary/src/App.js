import './App.css';
import Necessities from './components/Necessities';
import React, {useState} from 'react';
import Vacation from './components/Vacation';
import NewVacationForm from './components/NewActivity/NewVacationForm';

const initialVacations = [
  {
    id: "lv",
    destination: "Las Vegas",
    type : {
    outdoors : ["Marvel Avengers S.T.A.T.I.O.N at Treasure Island Hotel and Casino","Madam Toussauds with Gondola Boat Ride", "Shark Reef at Mandalay Bay Hotel and Casino"],
    tours : ["ATV Tour","Grand Canyon West Rim Bus Tour","Las Vegas Strip Highlights Helicopter Tour", "Big Bus Las Vegas Hop-on Hop-off Open Top Tour"],
    food : ["Downtown Vegas Sightseeing and Foodie Tour"],
    }
  },
  {
    id: "nyc",
    destination : "New York",
    type : 
    {
    outdoors : ["Bronx Zoo"],
    tours :  ["7 Hours Boroughs Tour","Circle Line Complete Manhattan Island Cruise", "Big Bus Hop on and off Tour"],
    food : ["Taste of NYC Tour","New York Premier Dinner Cruise","Chinatown and Little Italy Food Fest"],
  }
  },
  {
    id: "dc",
    destination: "Denver",
    type:
    {
    outdoors :  ["Beyond Light Show and Meditation","Rocky Mountain Ziplining"],
    tours : [ "Whiskey, History and Outlaws Tour", "Small Group Tour of Pike Peak and the Garden of the Gods"],
    food : ["The Dinner Detective Murder Mystery Dinner Show"],
  }
  }
]

function App() {
  const [vacations, setNewVacations] = useState(initialVacations);
           // console.log(initialVacations);
    const addNewVacationHandler = (vacations) => {
      setNewVacations((prevVacations) => {
        return [vacations, ...prevVacations];
      });
      
    

    };
  
   
  return (
    <div>
     <h2>TRAVEL PLANNER</h2>
     
      <NewVacationForm addToPlanner={addNewVacationHandler}/>
      <Vacation items = {vacations}/>
     
      <Necessities></Necessities>
      
    </div>
  );
}

export default App;
