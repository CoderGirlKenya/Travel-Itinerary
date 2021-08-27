import React from "react";

const VacationItem = (props) => {

    return (
        <div> 
        <h1>{props.destination}</h1>
            <div>
            <input type="date" name="travelDate"/>
            <input type="date" name="travelReturnDate"/>
            <select name = "outdoors">
                <option value = ''> Select OutDoor Activities</option>
                <option value = "1" > {props.outdoors} </option>
                {/* <option value = "2" > {props.outdoors[1]} </option>
                <option value = "3" > {props.outdoors[2]} </option> */}
            </select>
            
            </div>
            <div >
                <select name = "tours">
                <option value = ''>Select Tours</option>
                <option value = "1">{props.tours}</option>
                {/* <option value = "2">{props.tours[1]}</option>
                <option value = "3">{props.tours[2]}</option> */}
                </select>
            </div>
            <div>
                <select name = "food">
                <option value = ''>Select Food Activities</option>
                <option value = "1">{props.food}</option>
                {/* <option value = "2">{props.food[1]}</option>
                <option value = "3">{props.food[2]}</option> */}
                </select>
            </div>
            <button>ADD TO ITINERARY</button>
            </div>
     )       

}






export default VacationItem;