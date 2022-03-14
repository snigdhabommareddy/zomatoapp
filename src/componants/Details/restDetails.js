import React, { Component } from 'react';
import MenuDisplay from './menuDisplay';
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './details.css';

const url = "https://zomatonode.herokuapp.com/details"
const menuUrl = "https://zomatonode.herokuapp.com/menu"

class Details extends Component {
    constructor(props) {
        super(props)

        this.state = {
            details: '',
            menuList: '',
            userItem: ''
        }
    }

    render() {
        
        let { details } = this.state
        return (
            <>
                <div className="container mt-4">
                    <div className='row'>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="imageClass">
                                <img src={details.restaurant_thumb} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="content">
                                <h1 className="fw-bold text-primary">{details.restaurant_name}</h1>
                                <div className='mt-2 mb-3'>
                                    <i class="fa fa-star me-2"></i>
                                    <i class="fa fa-star me-2"></i>
                                    <i class="fa fa-star me-2"></i>
                                    <i class="fa fa-star me-2"></i>
                                    <i class="fa fa-star-half-full"></i>
                                    <span class="rating ms-2 text-success">(234 ratings)</span>
                                </div>
                                <h5 className='text-secondary'>Old Price :<strike>Rs 1200</strike></h5>
                                <h4 className='fw-bold text-danger'>New Price: Rs {details.cost}</h4>
                                <h3>We Provide Best Service</h3>
                                <div className='mt-3 mb-3'>
                                    <div class="icons me-3">
                                        <img src="https://i.ibb.co/2FbpqtH/sentizied.jpg" alt="sentizied" />
                                    </div>
                                    <div class="icons">
                                        <img src="https://i.ibb.co/s56LLF9/homedelivery.png" />
                                    </div>
                                </div>
                                <div>
                                    <Tabs>
                                        <TabList>
                                            <Tab>Details</Tab>
                                            <Tab>Contact</Tab>
                                        </TabList>

                                        <TabPanel>
                                            <h2 className='text-success'>{details.restaurant_name}</h2>
                                            <p>
                                                <b>{details.restaurant_name}</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                            </p>
                                        </TabPanel>
                                        <TabPanel>
                                            <p className='fw-bold text-danger'>{details.address}</p>
                                            <p className='fw-bold'>Phone: {details.contact_number}</p>
                                        </TabPanel>

                                    </Tabs>
                                </div>
                            </div>
                        </div>
                    </div>
                    <MenuDisplay />
                </div>

            </>
        )
    }


    async componentDidMount() {
        let restid = this.props.location.search.split('=')[1];
        let response = await axios.get(`${url}/${restid}`)
        let mealData = await axios.get(`${menuUrl}/${restid}`)
        this.setState({ details: response.data[0], menuList: mealData })
    }
}

export default Details