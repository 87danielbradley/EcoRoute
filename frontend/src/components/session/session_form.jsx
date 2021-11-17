import React from "react";
import { withRouter} from 'react-router-dom';
import LoginGeocoder from "../mapbox/login_geocoder";

class SessionForm extends React.Component{
    constructor(props){
    super(props);
    this.state = {
        username: '',
        email: '',
        password: '',
        password2: '',
        geometry: {},
        errors: {}
    };
    this.sessionErrors = this.sessionErrors.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoUser = this.demoUser.bind(this)
    this.clearedErrors = false;

    this.setState = this.setState.bind(this)
    }
    componentWillReceiveProps(nextProps) {
        if( nextProps.currentUser === true) {
            (this.props.formType === "Sign up") ?
                this.props.histry.push('/login') :
                this.props.histry.push('/')
                
        }
        this.setState({errors: nextProps.errors})
    }

    // componentDidMount(){
    //     this.props.resetErrors()
    // }

    update(field){
        return (event) => {
            this.setState({[field]: event.currentTarget.value})
        }
    }
    handleSubmit(e){
        e.preventDefault();

        let user = {
            username: this.state.username,
            password: this.state.password,
            password2: this.state.password2,
            email: this.state.email
        }
        this.props.action(this.state, this.props.history)
            .then( () => this.props.history.push('/'))

    }
    demoUser(e){
        e.preventDefault();
        
        this.props.login({email: "starwars",password: "starwars"})
            .then( () => this.props.history.push('/'))
    }
    sessionErrors(){
        return(
            <ul >
                {Object.keys(this.state.errors).map((error,i)=>(
                    <li key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
           
            
        )
    }
    

    render(){
        return (
            <div className='session-form-container' >
                <div className="session-form">

                    {this.props.formType === 'Sign up'?
                        <div className="form-item">
                            <h3 className="line-below">Have an account? {this.props.navLink}</h3>
                        </div>: 
                        null
                    }
                    
                    {this.props.formType === 'Sign up'?
                        <div className="form-item">
                            <h3 className="form-item">{this.props.formType}</h3>
                        </div>: 
                        <div>
                            <h3 className="form-item session-form-title">{this.props.formType}</h3>
                        </div>
                    }
                    {this.sessionErrors()}
                    
                    


                    <form className="form-session">
                        {this.props.formType === 'Sign up'?
                            <div className="form-item">
                            <input 
                                type="text"
                                className="form-item form-input"
                                placeholder="Name"
                                value={this.state.name}
                                onChange={this.update('name')}
                            />
                            </div>
                        : null}
                        <div className="form-item">
                        <input 
                            type="text"
                            className="form-item form-input"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.update('email')}
                        />
                        </div>
                        
                        <div className="form-item">
                        <input 
                            type="password"
                            placeholder="Password"
                            className="form-item form-input"
                            value={this.state.password}
                            onChange={this.update('password')}
                        />
                        </div>
                        {this.props.formType === 'Sign up'?
                            <div className="form-item">
                            <input 
                                type="password"
                                className="form-item form-input"
                                placeholder="Confirm Password"
                                value={this.state.password2}
                                onChange={this.update('password2')}
                            />
                            </div>
                        : null}



                        
                        {this.props.formType === 'Sign up' ?
                        null : <div className="form-item">
                            <p>New to EcoRoute? {this.props.navLink}</p>
                        </div>}

                        {this.props.formType === 'Sign up'?
                            <div className="form-item">
                                <LoginGeocoder setParentState={geoObject => this.setState(geoObject)}/>
                            </div>
                        : null}

                        
                        {this.props.formType === 'Sign up'?<button className="form-button form-item session-form-submit translatey-med" onClick={this.handleSubmit} value={this.props.formType}>Create account</button>:<button className="form-button form-item session-form-submit" onClick={this.handleSubmit} value={this.props.formType}>{this.props.formType}</button> }
                        {<button className="form-item demo-button translatey-med" onClick={this.demoUser} value={'Demo User'}>Demo User</button>}
                        
                    </form>
                </div>
            </div>
        )
    }


}

export default withRouter(SessionForm);


