import React, { useState, useEffect } from 'react';   
import CheckIcon from '@material-ui/icons/Check';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import MovieIcon from '@material-ui/icons/Movie';
import HomeIcon from '@material-ui/icons/Home';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import LocalDiningIcon from '@material-ui/icons/LocalDining';

const Item = ({ onClick, date, name, category, price }) => { 
    const [checked, isChecked] = useState(false);
    const [icon, setIcon] = useState(<AttachMoneyIcon/>); 
    
    useEffect(()=> {
        switch(category) {
            case 'dining':
                setIcon(<LocalDiningIcon />)
                break;
            case 'entertainment':
                setIcon(<MovieIcon />)
                break;
            case 'groceries':
                setIcon(<LocalGroceryStoreIcon />)
                break;
            case 'housing':
                setIcon(<HomeIcon />)
                break;
            case 'subscriptions':
                setIcon(<LiveTvIcon />)
                break;
            default: 
                setIcon(<AttachMoneyIcon />)
        }
    },[])

    return (
        <tr>  
            <td className="category">
                <div className="categoryIcon">{icon}</div>
            </td>
            <td className="itemCard">
                <span className="name">{name}</span> 
                <span className="date">{date}</span> 
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