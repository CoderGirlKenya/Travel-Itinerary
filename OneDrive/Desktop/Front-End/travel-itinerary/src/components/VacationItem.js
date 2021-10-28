import React from "react";
import classes from "./VacationItem.modules.css";


const VacationItem = (props) => {
    



     return (
     
             
             <div class="card-body"> 
             <div className={classes.vacationItem}>
         <h1 value={props.destination}>{props.destination} </h1>
             
             <input type="date" name="travelDate"/>
             <input type="date" name="travelReturnDate"/>
        <ul>
             <label>OUTDOOR ACTIVITY</label>
            <li name="activitytype" value={props.outdoors}>{props.outdoors}</li>
             
             <label>TOUR ACTIVITY</label>
             <li value={props.tours}>{props.tours}</li>
             
        
             <label>FOOD ACTIVITY</label>
            <li value={props.food}>{props.food}</li>
              </ul>
              <button class="btn btn-primary btn-sm">REMOVE ITEM</button>
              <button class="btn btn-primary btn-sm">DELETE ITEM</button>
              <button class="btn btn-primary btn-sm">BOOK VACATION</button> 
        </div>
        </div> 
        
     )
     }              
 
 
 
 export default VacationItem;
 
