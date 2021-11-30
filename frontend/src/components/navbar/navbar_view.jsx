import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"

class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        // this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    // getLinks(){
    //     // debugger
    //     if (this.props.loggedIn) {
    //         return(
    //             <div>
    //                 <button className="navbar-logout" onClick={this.props.logout}>Log Out</button>

    //             </div>
    //         );
    //     } else {
    //         return (
    //             <div>
    //                 <button onClick={() => this.props.openModal('login')} id="login-button">Log In</button>
    //                 <button onClick={() => this.props.openModal('signup')} id="signup-button">Sign Up</button>
    //                 {/* <Link to={'/signup'}>Signup</Link>
    //                 <Link to={'/login'}>Login</Link> */}
    //             </div>
    //         )
    //     }
    // }
    render(){
        // return(
        //     <nav className="nb">

        //         <h1>Eco Route</h1>
        //         {this.getLinks()}

        //     </nav>
        // )
        if (this.props.loggedIn) {
            return (
                <nav className="nb">
                    <h1>Eco Route</h1>
                    <section>
                        <button className="navbar-logout" onClick={this.props.logout}>Log Out</button>
                    </section>

                </nav>
            );
        } else {
            return (
                <nav className="nb">
                    <h1>Eco Route</h1>
                    <section>
                        <a onClick={() => this.props.openModal('login')} id="login-button">Log In</a>
                        <a onClick={() => this.props.openModal('signup')} id="signup-button">Sign Up</a>
                    </section>
                </nav>
            )
        }
    }
}

export default NavBar;