const VacationItem = (props) => {
    //  const [enteredDestination, setEnteredDestination] = useState('');
    // const [enteredActivity, setEnteredActivity] = useState('');
    // const [enteredType,  setSelectedType] = useState('');


    
    
        const addToGo = (event) => {
            event.preventDefault();
        
            
        }
            //console.log(vacationData);
    return (
        <div>
        <h1>{props.destination} </h1>
            <div>
            <input type="date" name="travelDate"/>
            <input type="date" name="travelReturnDate"/>
            <select name = "outdoors" >
                <option value = ''> Select OutDoor Activities</option>
                <option value = "1" > {props.type.outdoors[0]} </option>
                 <option value = "2" > {props.type.outdoors[1]} </option>
                <option value = "3" > {props.type.outdoors[2]} </option> 
            </select>
            
            </div>
            <div >
                <select name = "tours" >
                <option value = ''>Select Tours</option>
                <option value = "1">{props.type.tours[0]}</option>
                <option value = "2">{props.type.tours[1]}</option>
                <option value = "3">{props.type.tours[2]}</option> 
                </select>
            </div>
            <div>
                <select name = "food">
                <option value = ''>Select Food Activities</option>
                <option value = "1">{props.type.food[0]}</option>
                <option value = "2">{props.type.food[1]}</option>
                <option value = "3">{props.type.food[2]}</option>
                </select>
            </div>
            <button onClick ={addToGo}>READY TO CONQUER VACATION</button>
            </div>
            

    )
        }




export default VacationItem;