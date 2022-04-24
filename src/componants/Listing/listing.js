import React, { Component } from 'react';
import axios from 'axios';
import './listing.css'
import ListingDisplay from './listingDisplay';
import Cuisine from '../filters/cuisine'
import Cost from "../filters/cost"
import Sort from "../filters/sort"
import Header from '../../header';

const restUrl = "https://zomatonode.herokuapp.com/hotels?mealtype_id="

class Listing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            restaurantList: ''
        };
    }
    setDataPerFilter = (data) => {
        this.setState({ restaurantList: data })
    }

    render() {
        return (
            <>
            <Header/>
                <div className='container mt-5'>
                    <div className="row ">
                        <div className="col-lg-3 col-md-12 col-12 mt-4">
                            <div className='filter'>
                                <h3 className='text-center fw-bold text-danger mt-4'>Filter</h3>
                                <Cuisine mealId={this.props.match.params.mealId}
                                    restPerCuisine={(data) => { this.setDataPerFilter(data) }} />
                                <Cost mealId={this.props.match.params.mealId}
                                    restPerCost={(data) => { this.setDataPerFilter(data) }} />
                                <Sort mealId={this.props.match.params.mealId}
                                    restPerSort={(data) => { this.setDataPerFilter(data) }} />
                            </div>
                        </div>
                        <div className='col-lg-9 col-md-12 col-12 mt-4'>
                            <ListingDisplay listData={this.state.restaurantList} />
                        </div>
                    </div>
                </div>
            </>
        )
    }

    ///
    componentDidMount() {
        let mealid = this.props.match.params.mealId;
        sessionStorage.setItem('mealId', mealid)
        axios.get(`${restUrl}${mealid}`)
            .then((res) => { this.setState({ restaurantList: res.data }) })
    }
}

export default Listing