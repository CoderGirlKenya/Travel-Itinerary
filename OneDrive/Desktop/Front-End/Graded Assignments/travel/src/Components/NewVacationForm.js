import React, {useState, useRef} from "react";
import VacationsItems from "./VacationItems";


 const isEmpty = value => value.trim() === '';

const NewVacationForm = (props) => {
    
    const [formIsValid, setFormIsValid] = useState(false);

    const destinationInputRef = useRef(props.destination);
    const outdoorsActivityInputRef = useRef(props.outdoorsActivity);
    const toursActivityInputRef = useRef(props.toursActivity);
    const foodActivityInputRef = useRef(props.foodActivity);
    
                
        const addToList = (event) => {
            event.preventDefault();
            const enteredDestination = destinationInputRef.current.value;
            const enteredOutdoorsActivity = outdoorsActivityInputRef.current.value;
            const enteredToursActivity = toursActivityInputRef.current.value;
            const enteredFoodActivity = foodActivityInputRef.current.value;
        
                    console.log(enteredDestination);
                    console.log(enteredOutdoorsActivity);
                    console.log(enteredToursActivity);
                    console.log(enteredFoodActivity);    
        
            const enteredDestinationIsValid = !isEmpty(enteredDestination);
            const enteredOutdoorsActivityIsValid = !isEmpty(enteredOutdoorsActivity);
            const enteredToursActivityIsValid = !isEmpty(enteredToursActivity);
            const enteredFoodActivityIsValid = !isEmpty(enteredFoodActivity);
                    console.log(enteredDestinationIsValid);   
        if(formIsValid === enteredDestinationIsValid && enteredToursActivityIsValid && enteredOutdoorsActivityIsValid && enteredFoodActivityIsValid){
                setFormIsValid(true);  
        }
                
                if (formIsValid){
                const validVacation =[
                {
                    id: enteredDestination,
                    destination: enteredDestination,
                    outdoorsActivity: enteredOutdoorsActivity,
                    toursActivity: enteredToursActivity,
                    foodActivity: enteredFoodActivity,

                }
                ]

                localStorage.setItem('validVacation', JSON.stringify(validVacation)); 
            
                                                                   
                
            }
            
                
               

                
        }

                // console.log(`newVacationObj:  ',JSON.parse(newVacationObj);
            

    return (
        <div>
            <label>Desired Travel Destination</label>
             <input type="text"
             ref={destinationInputRef}
            ></input>
            <label>Outdoor Adventure</label>
            <input type="text"
            ref={outdoorsActivityInputRef}
            ></input>
            <label>Tour</label>
            <input type="text"
            ref={toursActivityInputRef}></input>
            <label>Food Activity</label>
            <input type="text"
            ref={foodActivityInputRef}></input>
            <button type="button" onClick={addToList}>ADD NEW VACATION</button>
            
        </div>
    )
}

export default NewVacationForm;