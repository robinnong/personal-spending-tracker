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
        <tr className="card">  
            <td className="card__category">
                <div className="card__icon">{icon}</div>
            </td>
            <td className="card__content">
                <span className="card__name">{name}</span> 
                <span className="card__date">{dateString}</span> 
            </td>  
            <td className="card__price">
                {price < 0 ? "- " : " "}
                ${Math.abs(price)}
            </td>
            <td> 
                <button 
                    className="checkbox__selection" 
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