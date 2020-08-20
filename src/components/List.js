import React from 'react'; 
import { connect } from 'react-redux';
import { sortColumn } from '../redux/actions';
import Item from './Item';
import { Sort, SortByAlpha } from '@material-ui/icons';

const List = ({ items, deleteItem, dispatch }) => ( 
    <table>
        <thead>
            <tr className="tableHeadings">
                <th onClick={() => dispatch(sortColumn("date"))}>
                    Date
                    <Sort /> 
                </th>
                <th onClick={() => dispatch(sortColumn("name"))}>
                    Item 
                    <SortByAlpha /> 
                </th>
                <th onClick={() => dispatch(sortColumn("category"))}>
                    Category
                    <SortByAlpha />
                </th>
                <th onClick={() => dispatch(sortColumn("price"))}>
                    Total
                    <Sort />
                </th>
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

export default connect()(List)