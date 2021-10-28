import { Fragment } from "react";
import classes from "../Data/Necessities.modules.css";

const Necessities=()=>{
    
    return(
        <div>
            <ul className={classes.header}> NECESSITIES
                <li className={classes.necessities}>Undergarments<input type = "checkbox"></input></li>
                <li  className={classes.necessities}>Outfits<input type = "checkbox"></input></li>
                <li  className={classes.necessities}>Shoes<input type = "checkbox"></input></li>
                <li className={classes.necessities} >Accessories<input type = "checkbox"></input></li>
                <li className={classes.necessities} >Hair Products<input type = "checkbox"></input></li>
                <li  className={classes.necessities}>Hygiene Products<input type = "checkbox"></input></li>
                <li className={classes.necessities} >Medication<input type = "checkbox"></input></li>      
                <li  className={classes.necessities}>Travel Documents<input type = "checkbox" ></input></li>
                <li className={classes.necessities} >Dog Sitter<input type = "checkbox"></input></li>
            </ul>
        </div>
    )
}
export default Necessities;