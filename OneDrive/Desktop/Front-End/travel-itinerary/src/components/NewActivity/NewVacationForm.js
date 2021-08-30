
import React, {useState} from "react";


const NewVacationForm = (props) => {
        const [enteredDestination, setEnteredDestination] = useState('');
        const [enteredActivity, setEnteredActivity] = useState('');
        const [enteredType,  setSelectedType] = useState('');
    

        

             const destinationChangeHandler = (event) => {
                 setEnteredDestination(event.target.value)
              console.log(event);
             };
        
            const activityChangeHandler = (event) => {
                setEnteredActivity(event.target.value);
            };
        
            const setType = (event) => {
                setSelectedType(event.target.value)
            }
            const addToPlanner = (event) => {
                event.preventDefault();
            
                // const newVacationData = {
                //     id: Math.random().toString(),
                //     destination : enteredDestination,
                //     type: {enteredType: enteredActivity},
                // };
                //console.log(newVacationData);
            }
    

            return (
                <form >
            
            <div>
                <div>
                <label>DESTINATION</label>
                    <input  
                    type = "text"
                     value = {enteredDestination}
                     onChange = {destinationChangeHandler}
                    />  
                </div>
                <div>
                
                <select  onChange={setType} value = {enteredType}>
                <option >SELECT ACTIVITY TYPE</option>
                <option >OUTDOOR</option>               
                <option >TOUR</option>
                <option >FOOD</option>
                </select>
                    <input type = "text" 
                    value = {enteredActivity} 
                    onChange={activityChangeHandler}
                   />
                
        
                 </div>
                <div>
                    <button type= "button" onClick={addToPlanner}>ADD TO PLANNER</button>
                </div>
        </div>
        </form>
            )
        };



export default NewVacationForm;