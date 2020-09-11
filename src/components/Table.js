import React, { useState } from 'react'; 
import { connect } from 'react-redux';
import Item from './Item'; 
import { TableStyle } from './styles';

const Table = ({ darkMode, items, deleteItem }) => {
    const [selected, setSelected] = useState([]);

    // Removes or adds selection
    const addSelected = (id) => {
        if (selected.includes(id)) {
            setSelected([...selected].filter(item => item !== id))
        } else {
            setSelected([...selected, id]);
        }
    }

    return (
        <TableStyle darkMode={darkMode}> 
            <thead> 
                <tr>  
                    <th></th>
                    <th>Item </th> 
                    <th>Total</th>
                    <th>
                        <button 
                            className={selected.length > 0 ? "deleteButton" : "hidden deleteButton"}
                            onClick={() => deleteItem(selected)}>
                                Delete
                        </button>


                    </th>
                </tr>
            </thead>
            <tbody>  
                {items.length > 0 
                    ? items.map((item) => { 
                        return (
                            <Item 
                                key={item.id}
                                {...item} 
                                onClick={() => addSelected(item.id)}
                            />
                        ) 
                    })
                    : <tr>
                        <td></td>
                        <td>No results to show</td>
                      </tr>
                } 
            </tbody>
        </TableStyle>  
    )
}

export default connect()(Table)