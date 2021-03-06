import React from 'react';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import MovieIcon from '@material-ui/icons/Movie';
import HomeIcon from '@material-ui/icons/Home';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import BuildIcon from '@material-ui/icons/Build';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import WorkIcon from '@material-ui/icons/Work';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import LocalDiningIcon from '@material-ui/icons/LocalDining';


export const SampleData = [
    {
        type: "expense",
        id: 0,
        date: '2019-11-02',
        dateString: '02 November',
        name: 'groceries',
        category: 'groceries',
        price: -200.00,
    },
    {   
        type: "expense",
        id: 1,
        date: '2019-11-08',
        dateString: '08 November',
        name: 'monthly rent',
        category: 'housing',
        price: -1000.00,
    },
    {   
        type: "expense",
        id: 2,
        date: '2019-11-22',
        dateString: '22 November',
        name: 'spotify',
        category: 'subscriptions',
        price: -9.99,
    },
    {
        type: "expense",
        id: 3,
        date: '2019-10-23',
        dateString: '23 October',
        name: 'birthday dinner',
        category: 'dining',
        price: -39.53,
    },
    {
        type: "expense",
        id: 4,
        date: '2019-10-22',
        dateString: '22 October',
        name: 'spotify',
        category: 'subscriptions',
        price: -9.99,
    }
] 

export const Categories = [ 
    { 
        category: 'dining',
        icon: <LocalDiningIcon />
    },
    {
        category: 'entertainment',
        icon: <LiveTvIcon />
    }, 
    {
        category: 'groceries',
        icon: <LocalGroceryStoreIcon />
    },
    {
        category: 'health',
        icon: <FitnessCenterIcon />
    },
    {
        category: 'housing',
        icon: <HomeIcon />
    },
    {
        category: 'earnings',
        icon: <WorkIcon />
    },
    {
        category: 'misc.',
        icon: <AttachMoneyIcon />
    }, 
    {
        category: 'shopping',
        icon: <LocalMallIcon />
    },
    {
        category: 'subscriptions',
        icon: <MovieIcon />
    },
    {
        category: 'utilities',
        icon: <BuildIcon />
    }
]

export const Months = [
    '',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]