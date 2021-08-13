import logo from './logo.svg';
import './App.css';
import Activities from './components/Activities';

function App() {
  const activities = [
    {
      destination: "Las Vegas",
      outdoors : "Marvel Avengers S.T.A.T.I.O.N at Treasure Island Hotel and Casino",
      tours :  "atv tour",
      food : "Downtown Vegas Sightseeing and Foodie Tour",
    
    },
    {
      destination : "New York",
      outdoors : "Bronx Zoo",
      tours :  "7 Hours Boroughs Tour",
      food : "Taste of NYC Tour",
    
    },
    {
      destination: "Denver",
      outdoors :  "Beyond Light Show and Meditation",
      tours :  "Whiskey, History and Outlaws Tour",
      food : "The Dinner Detective Murder Mystery Dinner Show",
    
    }
  ]
  
  return (
    <div>
          <Activities 
          destination={activities[0].destination}
          outdoors= {activities[0].outdoors} 
          tours={activities[0].tours} 
          food ={activities[0].food}>
          </Activities>
          <Activities
          destination={activities[1].destination}
          outdoors= {activities[1].outdoors} 
          tours={activities[1].tours} 
          food ={activities[1].food}>
          </Activities>
          <Activities
          destination={activities[2].destination}
          outdoors= {activities[2].outdoors} 
          tours={activities[2].tours} 
          food ={activities[2].food}>
          </Activities>
    </div>
  );
}

export default App;
