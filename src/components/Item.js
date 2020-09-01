import React, { useState } from 'react';   
import CheckIcon from '@material-ui/icons/Check';

const Item = ({ onClick, date, name, category, price }) => { 
    const [checked, isChecked] = useState(false);

    return (
        <tr>  
            <td className="itemCard">
                <span className="date">{date}</span> 
                <span className="name">{name}</span>
                <div className="category">
                    <span>{category}</span>
                </div>
            </td>  
            <td className="price">
                {price < 0 ? "- " : " "}
                ${Math.abs(price)}
            </td>
            <td> 
                <button 
                className="checkbox" 
                aria-label="checkbox" 
                    onClick={() => {
                        onClick()
                        isChecked(!checked)
                    }}
                >
                    {checked ? <CheckIcon /> : null}
                </button>
            </td>
        </tr> 
    )
}

export default Item