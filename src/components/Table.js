import React from 'react'; 
import { connect } from 'react-redux';
import Item from './Item'; 

const Table = ({ items, deleteItem }) => ( 
    <table> 
        <thead> 
            <tr className="tableHeadings">  
                <th>Item </th> 
                <th>Total</th>
                <th></th>
            </tr>
        </thead>
        <tbody>  
            {items.map((item) => { 
                return (
                    <Item 
                        key={item.id}
                        {...item} 
                        onClick={() => deleteItem(item.id)}
                    />
                ) 
            })}  
        </tbody>
    </table>  
)

export default connect()(Table)