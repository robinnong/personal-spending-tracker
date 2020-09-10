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
        name: 'groceries',
        category: 'groceries',
        price: -200.00,
    },
    {   
        type: "expense",
        id: 1,
        date: '2019-11-08',
        name: 'monthly rent',
        category: 'housing',
        price: -1000.00,
    },
    {   
        type: "expense",
        id: 2,
        date: '2019-11-22',
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
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
]