import React from 'react';
import {Link} from 'react-router-dom'

const ListingDisplay = (props) => {

    const renderData = ({listData}) => {
        if(listData){
            if(listData.length > 0 ){
                return listData.map((item) => {
                    return(
                        <div className="item" key={item.restaurant_id}>
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <img src={item.restaurant_thumb} className="Image"
                                    alt={item.restaurant_name}/>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="hotel_name mt-4">
                                        <Link to={`/details?restId=${item.restaurant_id}`}>{item.restaurant_name}</Link>
                                        <div className="city_name text-danger">{item.address}</div>
                                        <div className="city_name text-success mt-2">Rating:{item.average_rating}</div>
                                        <div className="city_name text-secondary mt-2 fw-bold cost">Rs. {item.cost}</div>
                                        <div className="labelDiv mt-3">
                                            <span className="btn btn-primary">
                                                {item.mealTypes[0].mealtype_name}
                                            </span>&nbsp;
                                            <span className="btn btn-success ms-3">
                                                {item.mealTypes[1].mealtype_name}
                                            </span>
                                        </div>
                                        <div className="labelDiv mt-3">
                                            <span className="btn btn-danger">
                                                {item.cuisines[0].cuisine_name}
                                            </span>&nbsp;
                                            <span className="btn btn-warning ms-3 text-white">
                                                {item.cuisines[1].cuisine_name}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                })
            }else{
                return(
                    <>
                        <h2>No Data For Filter</h2>
                    </>
                )
            }
        }else{
            return(
                <>
                    <img src="/images/loader.gif" alt="loader"/>
                    <h1>Loading.....</h1>
                </>
                
            )
        }
    }

    return(
        <div id="content">
            {renderData(props)}
        </div>
    )

}

export default ListingDisplay