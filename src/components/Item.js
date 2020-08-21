import React from 'react';  
import { Button } from '@material-ui/core'; 
import { Delete } from '@material-ui/icons';

const Item = ({ onClick, date, name, category, price }) => (
    <tr>
        <td>{date}</td>
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

export default Item