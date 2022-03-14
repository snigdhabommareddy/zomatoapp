import React, { Component } from 'react';
import "./QuickSearch.css"
import QuickDisplay from "./QuickDisplay"

const url = "https://zomatonode.herokuapp.com/mealtypes"

class QuickSearch extends Component {
    constructor() {
        super()

        this.state = {
            mealType: ''
        }
    }

    render() {
        return (
            <>
                <div class="container mt-5">
                    <h2 class="text-danger">Quick Search</h2>
                    <h6 class="text-secondary">Discover Resturants By Meal</h6>
                    <div class="row m-5">
                        <QuickDisplay mealData={this.state.mealType} />
                    </div>
                </div>
            </>
        )
    }


    componentDidMount() {
        fetch(url, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ mealType: data })
            })
    }
}

export default QuickSearch