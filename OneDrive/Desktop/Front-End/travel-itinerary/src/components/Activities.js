//import React, { useState } from 'react';
import './Activities.css';
import React from 'react';

const Activities=(props) =>{    
    


       return(
        <div>
        <h1>{props.destination}</h1>
            <div>
            <input type="date" name="travelDate"/>
            <input type="date" name="travelReturnDate"/>
            <select name = "outdoors">
                <option value = ''> Select OutDoor Activities</option>
                <option value = "1" > {props.outdoors[0]} </option>
                <option value = "2" > {props.outdoors[1]} </option>
                <option value = "3" > {props.outdoors[2]} </option>
            </select>
            
            </div>
            <div >
                <select name = "tours">
                <option value = ''>Select Tours</option>
                <option value = "1">{props.tours[0]}</option>
                <option value = "2">{props.tours[1]}</option>
                <option value = "3">{props.tours[2]}</option>
                </select>
            </div>
            <div>
                <select name = "food">
                <option value = ''>Select Food Activities</option>
                <option value = "1">{props.food[0]}</option>
                <option value = "2">{props.food[1]}</option>
                <option value = "3">{props.food[2]}</option>
                </select>
            </div>
            <button>Add to Itinerary</button>
        </div>
    )
}

export default Activities;