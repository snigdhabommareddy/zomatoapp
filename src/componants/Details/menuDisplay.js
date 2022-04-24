import React, { Component } from 'react';

class MenuDisplay extends Component {

    orderId = []

    addItem = (id) => {
        this.orderId.push(id)
        this.props.finalOrder(this.orderId)
    }
    removeItem = (id) => {
        if (this.orderId.indexOf(id) > -1) {
            this.orderId.splice(this.orderId.indexOf(id), 1)
        }
    }

    renderCart = (orders) => {
        if (orders) {
            return orders.map((item, index) => {
                return (
                    <b key={index}>{item}  &nbsp; &nbsp;</b>
                )
            })
        }
    }

    renderMenu = ({ menuData }) => {
        if (menuData) {
            return menuData.map((item) => {
                return (
                    <div key={item.menu_id}>
                        <div className="row mt-5">
                            <div className="col-md-5 d-flex">
                                <b>{item.menu_id}. </b>
                                <img src={item.menu_image} alt={item.menu_name} style={{ width: 80, height: 80 }} />
                                <p className='text-success mt-4 ms-5'>{item.menu_name}  </p>
                            </div>
                            <div className='col-md-3 mt-4'>
                                <b className='text-danger ms-5'> Rs.{item.menu_price}</b>
                            </div>

                            <div className="col-md-4 mt-3">
                                <button className="btn btn-success"
                                    onClick={() => { this.addItem(item.menu_id) }}>
                                    <b>Add to cart</b>
                                </button> &nbsp;
                                <button className="btn btn-danger"
                                    onClick={() => { this.removeItem(item.menu_id) }}>
                                    <b>Remove Item</b>
                                </button>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }
    render() {
        return (
            <>
                <div className='container bg-light mt-4'>
                    <h1 className='text-danger'>Menu</h1>
                    <p className='text-secondary'> 
                    Item Number {this.renderCart(this.orderId)} Added
                    </p>
                    <div className='col-md-12'>
                        {this.renderMenu(this.props)}
                    </div>
                </div>
            </>
        )
    }
}

export default MenuDisplay