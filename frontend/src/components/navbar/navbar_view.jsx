import React from "react";
import SearchBarContainer from "../search/searchbar_container";
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
    //     
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
                    <SearchBarContainer></SearchBarContainer>
                    <section>
                        <span className="navbar-logout" onClick={this.props.logout}>Log Out</span>
                    </section>

                </nav>
            );
        } else {
            return (
                <nav className="nb">
                    <h1>Eco Route</h1>
                    <section>
                        <span onClick={() => this.props.openModal('login')} id="login-button">Log In</span>
                        <span onClick={() => this.props.openModal('signup')} id="signup-button">Sign Up</span>
                    </section>
                </nav>
            )
        }
    }
}

export default NavBar;