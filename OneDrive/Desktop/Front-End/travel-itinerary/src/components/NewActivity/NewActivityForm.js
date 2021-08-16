import React, { useState } from "react";



const NewActivityForm = (props) =>{

const [userInput, setUserInput] = useState ({
    enteredDestination: '',
    enteredActivity: '',
    selectedType: '',
})
// const [enteredDestination, setEnteredDestination] = useState ('');
// const [enteredActivity,setEnteredActivity] = useState ('');
// const [selectedType, setSelectedType] = useState ('');
        
    
//    const destinationChangeHandler = (event) =>{
//     setEnteredDestination(event.target.value);
//     console.log(event.target.value)
//     event.target.value = newDestination;
//     }
    
    // const activityChangeHandler = (event) => {
    //     setEnteredActivity(event.target.value);
    //     console.log(event.target.value);
    //     event.target.value = newActivity;
    // };
    
    // const typeChangeHandler = (event) => {
    //     setSelectedType(event.target.value)
    //     event.target.value = newType;
    // };

    const submitForm = (event) =>{
        event.preventDefault();
            
        setUserInput ({
            enteredDestination : event.target.value,
            enteredActivity : event.target.value,
            selectedType: event.target.value,
            ...userInput,
        })

          console.log(setUserInput);
                    
        // //props.onSaveActivityData(activityData);
        // setEnteredDestination('');
        // setEnteredActivity('');
        // setSelectedType('');
    }
    return (
<form onSubmit = {submitForm}>
<div>
        <h1>VACATION PLANNER</h1> 
        <label>Destination
        <input  type = "text"/>
        </label>
       
        <label>Activity
        <input type = "text" />
        <select >
            <option value = "">Activity Type</option>
            <option value = "1">OutDoor</option>
            <option value = "2">Tour</option>
            <option value = "3">Food</option>
        </select>
        </label>
        </div>
        <div>
        <button onClick ={submitForm} >ADD TO LIST</button>
        </div>
        
        </form>
        
    )
}

export default NewActivityForm;