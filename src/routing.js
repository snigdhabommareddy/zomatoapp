import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Home from './componants/Home/Home';
import Listing from './componants/Listing/listing'
import Details from './componants/Details/restDetails';

const Router = () => {
    return(
        <BrowserRouter>
            <div>
                <Header/>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/listing/:mealId" component={Listing}/>
                    <Route exact path="/details" component={Details}/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default Router