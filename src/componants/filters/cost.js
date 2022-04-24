import React, { Component } from "react";
import axios from "axios";

const url = " https://zomatonode.herokuapp.com/filter"

class Cost extends Component {

    filterCost=(event)=>{
        let mealId = this.props.mealId
        let cost = (event.target.value).split('-')
        let lcost = cost[0];
        let hcost = cost[1];
        let costUrl = ""
        if(event.target.value === ""){
            costUrl = `${url}/${mealId}`
        }else{
            costUrl = `${url}/${mealId}?lcost=${lcost}&hcost=${hcost}`
        }
        axios.get(costUrl)
        .then((res) => {this.props.restPerCost(res.data)})

    }

    render() {
        return (
            <>
            <h4 className="text-center text-success mt-5">Cost Filter</h4>
            <div className="mt-4" onChange={this.filterCost}>
                <label className="radio d-flex ms-3 mt-3">
                    <input type="radio" value="" name="cost" className="mt-2"/>All
                </label>
                <label className="radio d-flex ms-3 mt-2">
                    <input type="radio" value="100-300" name="cost" className="mt-2"/>100-300
                </label>
                <label className="radio d-flex ms-3 mt-2">
                    <input type="radio" value="301-500" name="cost" className="mt-2"/>301-500
                </label>
                <label className="radio d-flex ms-3 mt-2">
                    <input type="radio" value="501-700" name="cost" className="mt-2"/>501-700
                </label>
                <label className="radio d-flex ms-3 mt-2">
                    <input type="radio" value="701-1000" name="cost" className="mt-2"/>701-1000
                </label>
                <label className="radio d-flex ms-3 mt-2">
                    <input type="radio" value="1001-2500" name="cost" className="mt-2"/>1001-2500
                </label>
            </div>
            </>
        )
    }
}
export default Cost