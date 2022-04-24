import React,{Component} from 'react';
import Header from '../../header';

const url  = "https://zomatojwt.herokuapp.com/api/auth/login"

class Login extends Component {
    constructor(props){
        super(props)

        this.state={
            email:'@gmail.com',
            password:'',
            message:''
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit = () => {
        fetch(url,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.auth === false){
                this.setState({message:data.token})
            }else{
                sessionStorage.setItem('ltk', data.token)
                this.props.history.push('/')
            }
        })
    }

    render(){
        return(
            <>
                <Header/>
                <div class="container mt-5">
                    
                        <h2 class="text-center text-success fw-bold">
                            Login Form
                        </h2>
                        <div class="mt-4">
                            <h3 style={{color:'red'}}>{this.state.message}</h3>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label form="form-control" for="email">Email</label>
                                    <input className="form-control" id="email" type="email"
                                    value={this.state.email}
                                            name="email" onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label form="form-control" for="password">Password</label>
                                    <input class="form-control" id="password" type="password"
                                    value={this.state.password}
                                            name="password" onChange={this.handleChange}/>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-success mt-4" onClick={this.handleSubmit}>Login</button>
                        </div>
                     
                </div>
            </>
        )
    }

}

export default Login