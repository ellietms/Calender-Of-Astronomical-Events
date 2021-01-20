import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

const DropDown = ({showVisibleObjects}) => {
return(
    <div>
        <select onChange={(event) => showVisibleObjects(event.target.value) }>
            <option value="All">All Visible-Objects</option>
            <option value="less">Less Visible-Objects</option>
        </select>
    </div>
);
}

export default DropDown;