import React from 'react';  
import { Button } from '@material-ui/core'; 
import { Delete } from '@material-ui/icons';

const Item = ({ onClick, date, name, category, price }) => (
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
            <button aria-label="Delete item" onClick={onClick}> 
                <Delete />
            </button>
        </td>
    </tr> 
)

export default Item