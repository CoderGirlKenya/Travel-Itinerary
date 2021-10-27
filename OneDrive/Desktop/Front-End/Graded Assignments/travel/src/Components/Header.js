import {NavLink} from "react-router-dom";
import React from "react";
import { Route } from "react-router";

const Header = () => {

    // let history = useHistory();

    // function handleClick() {
    //     history.push("intro")
    

    
    return (
        <header>
        <nav>
            <Route>
                <ul>    
                <li>
                <NavLink to='/'>BEGAN TO DREAM</NavLink>
                </li>
                <li>
                <NavLink to='/vacationItems'>VIEW VACATION</NavLink>
                </li>
                <li>
                <NavLink to='/newVacationForm'>PLAN VACATIONS</NavLink>
                </li>
                <li>
                <NavLink to='/necessities'>TRAVEL NEEDS</NavLink>
                </li>
            </ul>
            </Route>
        </nav>
        
        </header>
    )
}

export default Header;