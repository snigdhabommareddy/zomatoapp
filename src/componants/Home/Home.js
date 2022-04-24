import React from 'react';
import Header from '../../header';
import Search from './Search';
import QuickSearch from './QuickSearch';

const Home = (props) => {
    console.log("inside home>>>", props)
    return (
        <>
            <Header />
            <Search />
            <QuickSearch />
        </>
    )
}

export default Home