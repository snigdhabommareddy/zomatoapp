import React,{Component} from 'react';
import axios from 'axios';
import './listing.css'
import ListingDisplay from './listingDisplay';

const restUrl = "https://zomatonode.herokuapp.com/hotels?mealtype_id="

class Listing extends Component{
    constructor(props){
        super(props);

        this.state={
            restaurantList:''
        };
    }

    render(){
        return(
            <>
            <div className='container mt-5'>
                <div className="row ">
                        <div className="col-lg-3 col-md-12 col-12">
                            <div className='filter'>
                                <h3 className='text-center fw-bold text-danger mt-4'>Filter</h3>
                                <h4 className='price mt-4 ms-4'>By Price</h4>
                                <div className='category mt-4 ms-4'>
                                    <input type="radio" name="flexradio"/>100-200<br/>
                                    <input type="radio" name="flexradio"/>200-400<br/>
                                    <input type="radio" name="flexradio"/>400-700<br/>
                                    <input type="radio" name="flexradio"/>700-1000<br/>
                                    <input type="radio" name="flexradio"/>1000-2000
                                    </div>
                                </div>
                        </div>
                        <div className='col-lg-9 col-md-12 col-12 mt-4'>
                        <ListingDisplay listData={this.state.restaurantList}/>
                        </div>
                </div>
                </div>
            </>
        )
    }

    ///
    componentDidMount(){
        let mealid = this.props.match.params.mealId;
        axios.get(`${restUrl}${mealid}`)
        .then((res) => {this.setState({restaurantList:res.data})})
    }
}

export default Listing