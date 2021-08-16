import React, {useState} from "react";

const VacationForm = (props) => {
        const [enteredDestination, setEnteredDestination] = useState('');
        const [enteredActivity, setEnteredActivity] = useState('');
        //const [enteredDestination, setEnteredDestination] = useState('');
        
            const destinationChangeHandler = (event) => {
                setEnteredDestination(event.target.value);

            };
            const activityChangeHandler = (event) => {
                setEnteredActivity(event.target.value);
            };
        
            const addToIntinerary = (event) => {
                event.preventDefault();
            };
                const vacationData = {
                    destination : enteredDestination,
                    activity : enteredActivity,
                };
        
                console.log(vacationData);
            
                props.onSubmitNewVacation(vacationData);

            return (

            <form onSubmit={addToIntinerary}>
                <div>
                    <input type = "text" 
                    value = {enteredDestination}
                    onChange = {destinationChangeHandler}
                    />    
                </div>
                <div>
                    <input type = "text" 
                    value = {enteredActivity} 
                    onChange = {activityChangeHandler}
                    />
                </div>
                <div>
                    <button type ='submit'>ADD TO PLANNER</button>
                </div>
            </form>
            )
        };



export default VacationForm;