import React from 'react';  
import { Months } from './helpers';
import { Button } from '@material-ui/core'; 
import { Delete } from '@material-ui/icons';

const Item = ({ onClick, date, name, category, price }) => {
    const getFullDate = (str) => {
        const day = str.substring(8, 10);
        const month = Months[parseInt(str.substring(5, 7))];
        const year = str.substring(0, 4) 
        return `${month} ${day} ${year}`;
    }

    const fullDate = getFullDate(date);

    return (
        <tr>
            <td>{fullDate}</td>
            <td>{name}</td>
            <td className="category">
                <span>{category}</span>
            </td>
            <td className="price">${price}</td>
            <td>
                <Button 
                variant="outlined" 
                size="small" 
                color="secondary"
                aria-label="Delete item" 
                onClick={onClick} 
                startIcon={<Delete />}> 
                    Delete
                </Button>
            </td>
        </tr> 
    )
}

export default Item