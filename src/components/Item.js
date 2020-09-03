import React, { useState, useEffect } from 'react';   
import CheckIcon from '@material-ui/icons/Check'; 
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { Categories, Months } from './helpers'; 

const Item = ({ onClick, date, name, category, price }) => { 
    const [checked, isChecked] = useState(false);
    const [icon, setIcon] = useState(<AttachMoneyIcon />);
    const [newDate, setDate] = useState(date);

    useEffect(()=>{ 
        const type = Categories.find(item => item.category === category)
        setIcon(type.icon) 
 
        const month = Months[date.substring(5, 7)];
        const day = date.substring(8,10);
        const year = date.substring(0,4); 
        setDate(`${month} ${day}, ${year}`)
    },[])
    
    return (
        <tr>  
            <td className="category">
                <div className="categoryIcon">
                    {icon}
                </div>
            </td>
            <td className="itemCard">
                <span className="name">{name}</span> 
                <span className="date">{newDate}</span> 
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