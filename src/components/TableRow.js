import React from 'react'; 
import { Button } from '@material-ui/core'; 
import { Delete } from '@material-ui/icons';

const TableRow = (props) => {
    const { TableRowindex, name, category, price, date } = props;
    return( 
        <tr key={TableRowindex}>
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
                onClick={props.delete} 
                startIcon={<Delete />}> 
                    Delete
                </Button>
            </td>
        </tr> 
    )
}

export default TableRow;