
import { Link, NavLink} from "react-router-dom";
import classes from "./Welcome.modules.css";
import { Route } from "react-router-dom";

const Welcome = () => {
    return (
        <header >
            <nav>
                <Route>
                <ul>
                    <li>
                        <NavLink className={classes.header}
                        to='intro'>HomePage</NavLink>
                        </li>
                    <li>
                    <NavLink 
                    to="newVacation">New Vacation</NavLink>
                    </li>
                    <li>
                        <NavLink
                        to="vacationItem">Vacations</NavLink>
                    </li>
                    <li>
                    <NavLink
                    to="necessities">Necessities</NavLink>
                    </li>
                </ul>
                </Route>
                </nav>
        </header>

    )
}
export default Welcome;
