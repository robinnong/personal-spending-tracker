import React, { useState } from 'react'; 
import { connect } from 'react-redux';
import Item from './Item'; 

const Table = ({ items, deleteItem }) => {
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
        <table> 
            <thead> 
                <tr className="tableHeadings">  
                    <th>Item </th> 
                    <th>Total</th>
                    <th>
                        {selected.length > 0 
                            ? <button className="deleteButton" onClick={() => deleteItem(selected)}>Delete</button>
                            : null 
                        }
                    </th>
                </tr>
            </thead>
            <tbody>  
                {items.map((item) => { 
                    return (
                        <Item 
                            key={item.id}
                            {...item} 
                            onClick={() => addSelected(item.id)}
                        />
                    ) 
                })}  
            </tbody>
        </table>  
    )
}

export default connect()(Table)