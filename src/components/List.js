import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import { Sort, SortByAlpha } from '@material-ui/icons';

const List = ({ items, deleteItem }) => ( 
    // const [sortingMode, setSortingMode] = useState("");
    // const [isAscending, setDirection] = useState(true); 

    // Resets the sorting order direction to ascending whenever user switching the sorting mode
    // useEffect(() => {
    //     setDirection(true)
    // }, [sortingMode]);

    // Every time the user sorts the table, a sorting function is performed on the List and the sorting direction is toggled
    // useEffect(() => {
    //     let sortedItems = [...list];
    //     sortedItems.sort((a, b) => {
    //         if (b[sortingMode] > a[sortingMode]) {
    //             return 1;
    //         } else if (b[sortingMode] < a[sortingMode]) {
    //             return -1;
    //         }
    //         return 0;
    //     });
    //     if (isAscending) {
    //         sortedItems.reverse();
    //     }
    //     setList(sortedItems);
    // }, [isAscending])  

    <table>
        <thead>
            {/* <tr className="tableHeadings">
                <th onClick={() => {
                    setSortingMode("date");
                    setDirection(!isAscending);
                }}>
                    Date
                {sortingMode === "date"
                        ? <Sort />
                        : null
                    }
                </th>
                <th onClick={() => {
                    setSortingMode("name");
                    setDirection(!isAscending);
                }}>
                    Item
                {sortingMode === "name"
                        ? <SortByAlpha />
                        : null
                    }
                </th>
                <th onClick={() => {
                    setSortingMode("category");
                    setDirection(!isAscending);
                }}>
                    Category
                {sortingMode === "category"
                        ? <SortByAlpha />
                        : null
                    }
                </th>
                <th
                    onClick={() => {
                        setSortingMode("price");
                        setDirection(!isAscending);
                    }}>
                    Total
                {sortingMode === "price"
                        ? <Sort />
                        : null
                    }
                </th>
                <th></th>
            </tr> */}
        </thead>
        <tbody>  
            {items.map((item) => {
                // if (item.category === selectedFilter || selectedFilter === "") {
                    return (
                        <Item
                            key={item.id}
                            {...item} 
                            onClick={() => deleteItem(item.id)}
                        />
                    )
                // }
            })} 
        </tbody>
    </table> 
)

List.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            date: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired
        }).isRequired
    ).isRequired,
    deleteItem: PropTypes.func.isRequired
}

export default List