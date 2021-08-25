import React, { useState } from 'react';
import { createPortal } from 'react-dom';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length === 0){
      setIsValid(true);
    }    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
   // props.onAddGoal(enteredValue);
   if (enteredValue.trim().length === 0){
     setIsValid(false);
     return;
   }
  };

  return (
    <form onSubmit={formSubmitHandler}>
     {/* DYNAMICALLY ADDING CLASS */}
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
       {/* SETTING INLINE STYLING*/}
        {/* <label style={{color: !isValid ? 'red': 'black'}}>Course Goal</label>
        <input style={{borderColor: !isValid ? 'red' : '#ccc',
         background: !isValid ? 'salmon' : 'transparent'}}
         type="text" onChange={goalInputChangeHandler} /> */}
        
         <label>Course Goal</label>
         <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
