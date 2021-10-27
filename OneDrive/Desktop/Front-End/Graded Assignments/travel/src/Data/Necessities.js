 import { useState} from "react";
 
 const Necessities = (props) => {

    const [needs, setNeeds] = useState(["Undergarments","Outfits", "Swim Wear", "Accessories","Shoes",
    "Hair Products", "Hygience Products", "Medication","Travel Documents", "Dog Sitter","Undergarments",,"Outfits", "Swim Wear","Accessories", "Shoes","Hair Products", "Hygience Products", "Medication", 
    "Travel Documents", "Dog Sitter"])

    const ifChecked = (needs) => {
        
    }


    return (
        <div>
        {needs.map((need) => ( 
        <li key={need}>{need}</li>
        ))}
        </div>
    )

 }
export default Necessities;