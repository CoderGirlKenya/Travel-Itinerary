
import React, {useState} from "react";


const NewVacationForm = (props) => {
    const [enteredDestination, setEnteredDestination] = useState('');
    const [enteredActivity, setEnteredActivity] = useState('');
    const [activityTypeKey,setActivityTypeKey]= useState(false);
    const [enteredType,  setSelectedType] = useState(
        [{
        outdoors : [],
        tours: [],
        food: [],
        }]
    );
    
    

    const activityTypeArray= ["OUTDOORS","TOURS","FOOD"]
    

         const destinationChangeHandler = (event) => {
             setEnteredDestination(event.target.value)
             return event.target.value
          //console.log(event);
         }
    
        const activityChangeHandler = (event) => {
            setEnteredActivity(event.target.value);
            return event.target.value
        };
        
        
        const setType = (event) => {
    
             const activityType = event.target.value;

             setSelectedType(activityType);
            
             console.log(activityType)

         const vacationListHandler = 
            {
                key: Math.random().toString(),
                destination : enteredDestination,
                type: enteredType,
            }
        
            console.log(vacationListHandler);
        }


              
               
            // const addToPlanner = (event) => {
            //     event.preventDefault();
            //     console.log(setVacationList)
            // };
            
           //props.addToPlanner(setVacationListHandler);
               
             

             
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
                
                <select onChange={setType}>
                <option >SELECT ACTIVITY TYPE</option> */
                {props.items.map((activityTypeAr,index) => 
                <option value={enteredType} key={Math.random().toString()}> {activityTypeArray}</option> 
                 )}
            
                </select>
                    <input type = "text" 
                    value = {enteredActivity} 
                    onChange={activityChangeHandler}
                   />
                
        
                 </div>
                <div>
                    <button type= "button" onClick={()=>props.addToPlanner(props.vacationListHandler)}>ADD TO PLANNER</button>
                </div>
        </div>
        </form>
            )
        };



export default NewVacationForm;