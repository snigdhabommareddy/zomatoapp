import React, { Component } from 'react';
import axios from 'axios';

const url = "https://zomatonode.herokuapp.com/filter";

class SortFilter extends Component {

    filterSort = (event) => {
        let mealId = this.props.mealId
        let sortId = (event.target.value)
        let sortUrl = ""
        if(event.target.value === ""){
            sortUrl = `${url}/${mealId}`
        }else{
            sortUrl = `${url}/${mealId}?sort=${sortId}`
        }
        axios.get(sortUrl)
            .then((res) => { this.props.restPerSort(res.data) })

    }
    render() {
        return (
            <>
                <h4 className="text-center text-success mt-5">Sort Filter</h4>
                <div className="mt-4 mb-5" onChange={this.filterSort}>
                    <label className="radio d-flex ms-3 mt-3">
                        <input type="radio" value="1" name="sort" className="mt-2" />Low to High
                    </label>
                    <label className="radio d-flex ms-3 mt-2">
                        <input type="radio" value="-1" name="sort" className="mt-2" />High to Low
                    </label>
                </div>
            </>
        )
    }
}


export default SortFilter