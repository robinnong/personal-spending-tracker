import React, { useState, useEffect } from 'react';
import TableRow from './TableRow';
import { Sort, SortByAlpha } from '@material-ui/icons';

const Table = (props) => {
    const { list, deleteItem, selectedFilter, setList } = props;

    const [sortingMode, setSortingMode] = useState("");
    const [isAscending, setDirection] = useState(true); 

    // Resets the sorting order direction to ascending whenever user switching the sorting mode
    useEffect(() => {
        setDirection(true)
    }, [sortingMode]);

    // Every time the user sorts the table, a sorting function is performed on the List and the sorting direction is toggled
    useEffect(() => {
        let sortedItems = [...list];
        sortedItems.sort((a, b) => {
            if (b[sortingMode] > a[sortingMode]) {
                return 1;
            } else if (b[sortingMode] < a[sortingMode]) {
                return -1;
            }
            return 0;
        });
        if (isAscending) {
            sortedItems.reverse();
        }
        setList(sortedItems);
    }, [isAscending]) 

    return (
        <table>
            <thead>
                <tr className="tableHeadings">
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
                </tr>
            </thead>
            <tbody>
                {list.length === 0
                    ? <tr className="placeholderRow">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    : <>
                        {list.map((item, index) => {
                            if (item.category === selectedFilter || selectedFilter === "") {
                                return (
                                    <TableRow
                                        key={index}
                                        name={item.name}
                                        category={item.category}
                                        price={item.price}
                                        date={item.date}
                                        delete={() => deleteItem(index)}
                                    />
                                )
                            }
                        })}
                    </>
                }
            </tbody>
        </table> 
    )
}

export default Table;