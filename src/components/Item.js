import React, { useState, useEffect } from 'react';   
import CheckIcon from '@material-ui/icons/Check'; 
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { Categories } from './helpers'; 

const Item = ({ onClick, dateString, name, category, price }) => { 
    const [checked, isChecked] = useState(false);
    const [icon, setIcon] = useState(<AttachMoneyIcon />); 

    useEffect(()=>{ 
        const type = Categories.find(item => item.category === category)
        setIcon(type.icon) 
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
                <span className="date">{dateString}</span> 
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