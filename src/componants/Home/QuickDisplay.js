import React from 'react';
import { Link } from 'react-router-dom';

const QuickDisplay = (props) => {

    const listMeal = ({ mealData }) => {
        if (mealData) {
            return mealData.map((item) => {
                return (
                    
                    <div className="col-lg-4 col-md-6 col-12">
                    <div className="card mb-5" style={{ width: '18rem', margin: '20px' }}>
                    <Link to={`/listing/${item.mealtype_id}`} key={item.mealtype_id}> <img className="card-img-top" src={item.meal_image} alt="Card" />
                            <div className="card-body">
                                <span className="link"><h5 className="card-title">{item.mealtype}</h5></span>
                                <p className="card-text text-secondary">{item.content}</p>
                            </div> </Link>
                    </div>
                    </div>
                   
                )
            })
        }

    }

    return (
        <>
            {listMeal(props)}
        </>
    )
}

export default QuickDisplay