import './App.css';
import Activities from './components/Activities';
import Necessities from './components/Necessities';
import NewActivity from './components/NewActivity/NewActivity';
import React from 'react';


function App() {
  const activities = [
    {
      destination: "Las Vegas",
      outdoors : ["Marvel Avengers S.T.A.T.I.O.N at Treasure Island Hotel and Casino","Madam Toussauds with Gondola Boat Ride", "Shark Reef at Mandalay Bay Hotel and Casino"],
      tours : ["ATV Tour","Grand Canyon West Rim Bus Tour","Las Vegas Strip Highlights Helicopter Tour", "Big Bus Las Vegas Hop-on Hop-off Open Top Tour"],
      food : ["Downtown Vegas Sightseeing and Foodie Tour"],
    
    },
    {
      destination : "New York",
      outdoors : ["Bronx Zoo"],
      tours :  ["7 Hours Boroughs Tour","Circle Line Complete Manhattan Island Cruise", "Big Bus Hop on and off Tour"],
      food : ["Taste of NYC Tour","New York Premier Dinner Cruise","Chinatown and Little Italy Food Fest"],
    
    },
    {
      destination: "Denver",
      outdoors :  ["Beyond Light Show and Meditation","Rocky Mountain Ziplining"],
      tours : [ "Whiskey, History and Outlaws Tour", "Small Group Tour of Pike Peak and the Garden of the Gods"],
      food : ["The Dinner Detective Murder Mystery Dinner Show"],
    
    }
  ]
    const addNewVacationHandler = activities =>{
      console.log(activities)
    }
  
   
  return (
    <div>
     
      <NewActivity onAddVacation = {addNewVacationHandler}/>
      <Activities
    destination = {activities[0].destination}
      outdoors = {activities[0].outdoors}
      tours = {activities[0].tours}
      food = {activities[0].food}>
      </Activities>
      <Activities 
      destination = {activities[1].destination}
      outdoors = {activities[1].outdoors}
      tours = {activities[1].tours}
      food = {activities[1].food}>  
      </Activities>
      <Activities 
      destination = {activities[2].destination}
      outdoors = {activities[2].outdoors}
      tours = {activities[2].tours}
      food = {activities[2].food}>  
      </Activities>
            
      
      <Necessities></Necessities>
      
    </div>
  );
}

export default App;
