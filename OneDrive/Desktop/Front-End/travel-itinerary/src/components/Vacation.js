import VacationItem from "./VacationItem";

function Vacation (props) {
    return (
        <div>
        <div>
        {props.items.map((activities) => {
            return(
        <VacationItem 
        key = {activities.id}
        destination = {activities.destination} 
        outdoors = {activities.outdoors} 
        tours = {activities.tours} 
        food ={activities.food}
        />
            )
        })}
            {/* <VacationItem 
            destination = {props.items[0].destination}
            outdoors = {props.items[0].outdoors}
            tours = {props.items[0].tours}
            food = {props. items[0].food}/>
            <VacationItem 
            destination = {props.items[1].destination}
            outdoors = {props.items[1].outdoors}
            tours = {props.items[1].tours}
            food = {props. items[1].food}/>
            <VacationItem 
            destination = {props.items[2].destination}
            outdoors = {props.items[2].outdoors}
            tours = {props.items[2].tours} */}
            {/* food = {props. items[2].food}/> */}
        </div>
    </div>  
    )
};


export default Vacation;