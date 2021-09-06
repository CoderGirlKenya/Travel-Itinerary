import React, {useState} from "react";
import VacationsList from "./NewVacationForm";

const ActivitiesList = props => {
    const {activity, filteredActivitiesList, setActivitiesList} = props;
    const [inputVal, setInputVal] = useState('');

    const addActivityHandler = e => {
        if(e.key === "Enter" && inputVal) {
            setActivitiesList(prevList => [
                ...prevList,
                {
                    destination : inputVal,
                    activityType: activity,
                }
            ]);
            setInputVal('');
        }
    };

    return (
        <div>
        <ul>
        {filteredActivitiesList.map(item => {
            <VacationsList
            key= {Math.random().toString()}
            destination={item.destination}
            setActivitesList={setActivitiesList}
            />
        })}
        </ul>
        <input 
        type="text"
        value={inputVal}
        onKeyDown={addActivityHandler}
        onChange={e => setInputVal(e.target.value)}
        />
        </div>
    )
}

export default ActivitiesList;