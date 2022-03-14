import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Header extends Component {

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
                            <button className="btn btn-primary me-4" type="submit">Sign up</button>
                            <button className="btn btn-success" type="submit">Login</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}


export default Header;