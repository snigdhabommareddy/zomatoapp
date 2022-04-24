import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

const url = "https://zomatojwt.herokuapp.com/api/auth/userinfo";

class Header extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userData: '',
            username:'',
            userImg:''
        }
    }

    handleLogout = () => {
        sessionStorage.removeItem('userInfo');
        sessionStorage.setItem('loginStatus','loggedOut');
        sessionStorage.removeItem('ltk');
        sessionStorage.removeItem('uName')
        sessionStorage.removeItem('uImg')
        this.setState({userData:'',username:"",userImg:''})
        this.props.history.push('/')
    }
    conditionalHeader = () => {
        if(this.state.userData.name || sessionStorage.getItem('uName') !== null){
            if(sessionStorage.getItem('uName') !== null){
                let name = sessionStorage.getItem('uName');
                let image = sessionStorage.getItem('uImg');
                return(
                    <>
                        <Link className="btn btn-warning" to="/">
                            <img src={image} style={{height:30,width:30}}/> &nbsp;
                                 Hi {name}
                        </Link>
                        &nbsp;
                        <button className="btn btn-danger" onClick={this.handleLogout}>
                            LogOut
                        </button>
                    </>
                )

            }else{
                let data = this.state.userData;
                let outArray = [data.name,data.email,data.phone,data.role]
                sessionStorage.setItem('userInfo',outArray);
                sessionStorage.setItem('loginStatus','loggedIn');
                return(
                    <>
                        <Link className="btn btn-warning" to="/">
                             Hi {data.name}
                        </Link>
                        &nbsp;
                        <button className="btn btn-danger" onClick={this.handleLogout}>
                            LogOut
                        </button>
                    </>
                )
            }     
        }else {
            return (
                <>
                    <a className="btn btn-warning me-4 text-white" href="https://github.com/login/oauth/authorize?client_id=42c35be467cd1c337086">
                        Login With Github
                    </a>
                    <Link className="btn btn-primary me-4" to="/register">Sign up</Link>
                    <Link className="btn btn-success" to="/login">Login</Link>

                </>
            )
        }
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
                    <div class="container-fluid">
                        <Link class="navbar-brand text-white fw-bold ms-4" to="/">Zomato</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <form className="d-flex ms-auto me-5">
                                {this.conditionalHeader()}
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
    componentDidMount() {
        if(this.props.location.search){
            // console.log("in git>>>",this.props.location.search)
            if(this.props.location.search.split('=')[0] == '?code'){
                var code = this.props.location.search.split('=')[1]
            }

            if(code){
                
                let requestedData = {
                    code:code
                }

                fetch(`http://localhost:9900/oauth`,{
                    method:'POST',
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify(requestedData)
                })
                .then((res) => res.json())
                .then((data) => {
                    console.log(">>>>data>>>>>",data)
                    let username = data.name;
                    let img = data.avatar_url;
                    sessionStorage.setItem('uName',username)
                    sessionStorage.setItem('uImg',img)
                    sessionStorage.setItem('loginStatus','loggedIn')
                    this.setState({username:username,userImg:img})
                })
            }
        }
        fetch(url, {
            method: 'GET',
            headers: {
                'x-access-token': sessionStorage.getItem('ltk')
            }
        })
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    userData: data
                })
            })
    }
}

export default withRouter(Header)