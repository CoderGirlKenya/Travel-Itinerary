import './Activities.css';

function Activities(props) {
       const activitiesDestination = "Las Vegas"; 
       const activitiesOutdoors = "Marvel Avengers S.T.A.T.I.O.N at Treasure Island Hotel and Casino";
       const activitesTours = "atv tour";
       const activitiesFood = "Downtown Vegas Sightseeing and Foodie Tour";
       
//    const lasVegas = [];

//     let outdoors = ["Madam Toussauds with Gondola Boat Ride", "Shark Reef at Mandalay Bay Hotel and Casino", "Marvel Avengers S.T.A.T.I.O.N at Treasure Island Hotel and Casino"]

//     let tours = ["atv tour", "Grand Canyon West Rim Bus Tour","Las Vegas Strip Highlights Helicopter Tour", "Big Bus Las Vegas Hop-on Hop-off Open Top Tour"]

//     let food = ["Downtown Vegas Sightseeing and Foodie Tour"]
   
//     lasVegas.push(outdoors, tours, food)
    
    return (
        <div>
            <h1>{props.destination}</h1>
            <div>
            <input type="date" name="travelDate"/>
            <select name = "outdoors">
                <option value = ''> OutDoor Activities</option>
                <option value = "1" > {props.outdoors} </option>
                {/* <option value = "2">{LasVegas.outdoors[1]}</option>
                <option value = "3">{LasVegas.outdoors[2]}</option> */}
            </select>
            
            </div>
            <div>
            <select name = "tours">
                <option value = ''> Tours</option>
                <option value = "1">{props.tours}</option>
                {/* <option value = "2">{LasVegas.tours[1]}</option>
                <option value = "3">{LasVegas.tours[2]}</option> */}
            </select>
            </div>
            <div>
                <select name = "food">
                <option value = ''>Food Activities</option>
                <option value = "1">{props.food}</option>
                </select>
            </div>
            <button>Submit</button>
        </div>
    )
}

export default Activities;