import React from 'react'; 
import { Button } from '@material-ui/core'; 

const TableRow = (props) => {
    const { TableRowindex, name, category, price, date } = props;
    return( 
        <tr key={TableRowindex}>
            <td>{name}</td>
            <td>{category}</td>
            <td>${price}</td>
            <td>{date}</td>
            <td>
                <Button variant="contained" size="small" color="primary"
                aria-label="Delete item" onClick={props.delete}>Delete</Button>
            </td>
        </tr> 
    )
}

export default TableRow;