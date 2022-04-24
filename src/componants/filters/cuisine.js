import React, { Component } from "react";
import axios from "axios";

const url = "https://zomatonode.herokuapp.com/filter"

class Cuisine extends Component {

    filterCuisine=(event)=>{
        let cuisineId = event.target.value;
        let mealId = this.props.mealId
        let cuisineUrl = ""
        if(cuisineId === ""){
            cuisineUrl = `${url}/${mealId}`
        }else{
            cuisineUrl = `${url}/${mealId}?cuisine=${cuisineId}`
        }
        axios.get(cuisineUrl)
        .then((res) => {this.props.restPerCuisine(res.data)})

    }

    render() {
        return (
            <>
            <h4 className="text-center text-success">Cuisine Filter</h4>
            <div className="mt-4" onChange={this.filterCuisine}>
                <label className="radio d-flex ms-3 mt-3">
                    <input type="radio" value="" name="cuisine" className="mt-2"/>All
                </label>
                <label className="radio d-flex ms-3 mt-2">
                    <input type="radio" value="1" name="cuisine" className="mt-2"/>North Indian
                </label>
                <label className="radio d-flex ms-3 mt-2">
                    <input type="radio" value="2" name="cuisine" className="mt-2"/>South Indian
                </label>
                <label className="radio d-flex ms-3 mt-2">
                    <input type="radio" value="3" name="cuisine" className="mt-2"/>Chinese
                </label>
                <label className="radio d-flex ms-3 mt-2">
                    <input type="radio" value="4" name="cuisine" className="mt-2"/>Fast Food
                </label>
                <label className="radio d-flex ms-3 mt-2">
                    <input type="radio" value="5" name="cuisine" className="mt-2"/>Street Food
                </label>
            </div>
            </>
        )
    }
}
export default Cuisine