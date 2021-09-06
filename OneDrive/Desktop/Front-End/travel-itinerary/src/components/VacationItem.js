
const VacationItem = (props) => {
    //  const [enteredDestination, setEnteredDestination] = useState('');
    //const [enteredActivity, setEnteredActivity] = useState('');
    // const [enteredType,  setSelectedType] = useState('');

        // props.type = {
        //     "outdoors": enteredActivity,
        //     "tours": enteredActivity,
        //      "food":enteredActivity,
        // }
    
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
                {props.type.outdoors.map((outdoorsType,index) => 
                <option value={index} key={Math.random().toString()}> {outdoorsType}</option> 
                 )}
                {/* <option value = "1" > {props.type.outdoors[0]} </option>
                 <option value = "2" > {props.type.outdoors[1]} </option>
                <option value = "3" > {props.type.outdoors[2]} </option>  */}
            </select>
            
            </div>
            <div >
               <select name = "tours" >
                <option value = ''>Select Tours</option>
                {props.type.tours.map((toursType,index) => 
                <option value={index} key={Math.random().toString()}> {toursType}</option> 
                )}
                {/* <option value = "1">{props.type.tours[0]}</option>
                <option value = "2">{props.type.tours[1]}</option>
                <option value = "3">{props.type.tours[2]}</option>  */}
                </select>
            </div>
            <div>
                <select name = "food">
                <option value = ''>Select Food Activities</option>
                {props.type.food.map((foodType,index) => 
                <option value={index} key={Math.random().toString()}> {foodType}</option> 
                )}
                {/* <option value = "1">{props.type.food[0]}</option>
                <option value = "2">{props.type.food[1]}</option>
                <option value = "3">{props.type.food[2]}</option> */}
                </select>
            </div>
            <button onClick ={addToGo}>READY TO CONQUER VACATION</button>
            </div>
            

    )
        }




export default VacationItem;