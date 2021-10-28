import React,{Fragment, useState, useRef} from "react";
import classes from "./NewVacationForm.modules.css";

const isEmpty = value => value.trim() === '';

const NewVacationForm = (props) => {
    
    const [vacations, setVacations] = useState([]);
    const destinationInputRef = useRef(props.destination);
    const outdoorsInputRef = useRef(props.outdoors);
    const toursInputRef = useRef(props.tours);
    const foodInputRef = useRef(props.food);

    const [formIsValid, setFormIsValid] = useState(true);
    const [formsInputValidity, setFormsInputValidity] = useState({
        destination: true,
        outdoors: true,
        tours: true,
        food: true,
    });

    const addToList = (event) => {
        event.preventDefault();
        const enteredDestination = destinationInputRef.current.value;
        const enteredOutdoors = outdoorsInputRef.current.value;
        const enteredTours = toursInputRef.current.value;
        const enteredFood = foodInputRef.current.value;
        console.log(enteredDestination);
        console.log(enteredOutdoors);
        console.log(enteredTours);
        console.log(enteredFood);
        const enteredDestinationIsValid = !isEmpty(enteredDestination);
        const enteredOutdoorsIsValid = !isEmpty(enteredOutdoors);
        const enteredToursIsValid = !isEmpty(enteredTours);
        const enteredFoodIsValid = !isEmpty(enteredFood);
        console.log(enteredDestinationIsValid);
        setFormsInputValidity({
            id: enteredDestination,
            destination: enteredDestinationIsValid,
            outdoorsActivity: enteredOutdoorsIsValid,
            toursActivity: enteredToursIsValid,
            foodActivity: enteredFoodIsValid,
        });
        if(formIsValid === enteredDestinationIsValid && enteredToursIsValid && enteredOutdoorsIsValid && enteredFoodIsValid){
            setFormIsValid(true)
            setVacations(
                vacations.map((vacation) =>{
                    return{...vacation, vacations}
                })
            )
        } 
    }
    
        
            
        const destinationControlClasses = `${classes.control} ${formsInputValidity.destination ?`` : classes.invalid}`
        const outdoorsControlClasses = `${classes.control} ${formsInputValidity.outdoors ?`` : classes.invalid}`
        const toursControlClasses = `${classes.control} ${formsInputValidity.tours ?`` : classes.invalid}`
        const foodControlClasses = `${classes.control} ${formsInputValidity.food ?`` : classes.invalid}`

        

 return (
    <Fragment>
    <div className={classes.backgroundImage}>
            <div className={destinationControlClasses}>
        <label>DESTINATION</label>
            <input 
             
            type="text"
            //  
            ref={destinationInputRef}
            //  onChange={destinationChangeHandler}
            />  
            {!formsInputValidity.destination && <p className={classes.notValid}>See some place new, please enter a destination</p>}
            </div>
            
            <div className={outdoorsControlClasses}>
            <label>OUTDOORS ACTIVITY</label>
            <input
             type = "text" 
            // 
            ref={outdoorsInputRef}
            // onChange={outdoorsChangeHandler}
           />
           {!formsInputValidity.outdoors && <p className={classes.notValid}>Enjoy the outdoors, pick an activity</p>}
           </div>
           
           <div className={toursControlClasses}>
           <label>TOUR ACTIVITY</label>
            <input
             type = "text" 
            // 
            ref={toursInputRef} 
            // onChange={toursChangeHandler}
           />
           {!formsInputValidity.tours && <p className={classes.notValid}>Explore the destination, take a tour</p>}
           </div>
           
           <div className={foodControlClasses}>
           <label>FOOD ACTIVITY</label>
            <input
             type = "text" 
            // 
            ref={foodInputRef}
            // onChange={foodChangeHandler}
           />
           {!formsInputValidity.food && <p className={classes.notValid}>Try a native dish, add a food activity</p>}
       </div>
       
    ={()=>props.onSaveVacation(props.vacationListHandler)}
 

        <div>
            <button type= "button" class="btn-primary"  > ADD TO PLANNER </button>
        </div>
</div>
        </Fragment>
 )
}

export default NewVacationForm;
