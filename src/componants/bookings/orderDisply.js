import React from 'react';

const BookingDisplay = (props) => {

    const renderTable = ({orderData}) => {
        if(orderData){
            return orderData.map((item) => {
                return(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.hotel_name}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>Rs.{item.cost}</td>
                        <td>{item.date}</td>
                        <td>{item.status}</td>
                        <td>{item.bank_name}</td>
                    </tr>
                )
            } )
        }
    }

    return(
        <div className="container mt-4">
            <h3 className='text-center text-danger'>orders</h3>
            <table className="table">
                <thead>
                    <tr className='text-success'>
                        <th>OrderId</th>
                        <th>RName</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Cost</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>BankName</th>
                    </tr>
                </thead>
                <tbody className='text-secondary'>
                    {renderTable(props)}
                </tbody>
            </table>
        </div>
    )
}

export default BookingDisplay