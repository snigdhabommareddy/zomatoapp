import React,{Component} from 'react';
import './placeOrder.css';
import Header from '../../header';

const url = "http://zomatonode.herokuapp.com/menuItem";
const postData = "http://localhost:6700/orders"


class PlaceOrder extends Component{
    constructor(props){
        super(props);

        let userData = sessionStorage.getItem('userInfo')

        this.state={
            id:Math.floor(Math.random()*100000),
            hotel_name:this.props.match.params.restName,
            name: userData? userData.split(',')[0]:'',
            email:userData? userData.split(',')[1]:'',
            cost:0,
            phone:userData? userData.split(',')[2]:'',
            address:'Hno 28',
            menuItem:''
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    checkout = () => {
        let obj = this.state;
        obj.menuItem = sessionStorage.getItem('menu');
        fetch(postData,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(obj)
        })
        //.then(this.props.history.push('/viewBooking'))
        .then(console.log('order taken'))
    }
    
    renderMenu = (data) => {
        if(data){
            return data.map((item) => {
                return (
                    <div class="card ordercard m-4" style={{ width: '18rem', height: '320px' }} key={item.menu_id}>
                    <img src={item.menu_image} alt={item.menu_name} />
                    <div class="card-body">
                        <h4 className="text-center text-danger">{item.menu_name}</h4>
                        <h5 className="text-center text-secondary">Rs. {item.menu_price}</h5>
                    </div>
                </div>
                )
            })
        }
    }
    

    render(){
        if(sessionStorage.getItem('loginStatus') === 'loggedOut'){
            return(
                <>
                    <Header/>
                    <center>
                        <h2 className="mt-5 text-danger">Login First To Place Order</h2>
                    </center>
                </>

            )
        }
        console.log(this.state)
        return(
            <>
                <Header/>
                <div className="container">
                    <div className="mt-5 background">
                        <div className="heading p-3">
                            <h3>Your Order from Restaurant {this.props.match.params.restName} </h3>
                        </div>
                        <div className="body">
                            <form action="https://edurekazomatopayment.herokuapp.com/paynow" method="POST">
                                <input type="hidden" name="cost" value={this.state.cost}/>
                                <input type="hidden" name="id" value={this.state.id}/>
                                <input type="hidden" name="hotel_name" value={this.state.hotel_name}/>
                                <div className="row mt-4">
                                    <div className="form-group col-md-6">
                                        <label for="fname">Name</label>
                                        <input id="fname" name="name" className="form-control"
                                        value={this.state.name} onChange={this.handleChange}/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="email">Email</label>
                                        <input id="email" name="email" className="form-control"
                                        value={this.state.email}  onChange={this.handleChange}/>
                                    </div>
                                    <div className="form-group col-md-6 mt-4 mb-4">
                                        <label for="phone">Phone</label>
                                        <input id="phone" name="phone" className="form-control"
                                        value={this.state.phone} onChange={this.handleChange}/>
                                    </div>
                                    <div className="form-group col-md-6 mt-4 mb-4">
                                        <label for="address">Address</label>
                                        <input id="address" name="address" className="form-control"
                                        value={this.state.address}  onChange={this.handleChange}/>
                                    </div>
                                </div>
                                {this.renderMenu(this.state.menuItem)}
                                <div className="row">
                                    <div className="col-md-12">
                                        <h2>Total Price is Rs.{this.state.cost}</h2>
                                    </div> 
                                </div>
                                <button className="btn btn-success" onClick={this.checkout}
                                type="submit">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    componentDidMount(){
        let menuItem = sessionStorage.getItem('menu')
        let orderId = [];
        menuItem.split(',').map((item) => {
            orderId.push(parseInt(item));
            return 'ok'
        })
        fetch(url,{
            method: 'POST',
            headers: {
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(orderId)
        })
        .then((res) => res.json())
        .then((data) => {
            let totalPrice = 0;
            data.map((item) => {
                totalPrice += parseFloat(item.menu_price)
                return 'ok'
            })
            this.setState({cost: totalPrice, menuItem:data})
        })
    }

}

export default PlaceOrder;