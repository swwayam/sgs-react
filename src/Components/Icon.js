import React from "react";
import {FaTimes, FaPen, FaRegCircle} from "react-icons/fa"


const Icon = ({theIcon}) => {
    switch(theIcon){
        case 'Circle':
            return <FaRegCircle className="icons" />
        case 'Cross':
            return <FaTimes className="icons" />
        default:
            return <FaPen className="icons" />
    }
}

export default Icon;