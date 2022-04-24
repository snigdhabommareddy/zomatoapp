import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Footer from './footer';
import Home from './componants/Home/Home';
import Listing from './componants/Listing/listing'
import Details from './componants/Details/restDetails';
import ViewOrder from './componants/bookings/viewOrder';
import PlaceOrder from './componants/bookings/placeOrder';
import Register from './componants/logiin/register';
import Login from './componants/logiin/login';

const Router = () => {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/listing/:mealId" component={Listing} />
                <Route exact path="/details" component={Details} />
                <Route path="/viewBooking" component={ViewOrder} />
                <Route path="/placeOrder/:restName" component={PlaceOrder} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default Router