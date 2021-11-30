import React from "react";
import { withRouter} from 'react-router-dom';
import LoginGeocoder from "../mapbox/login_geocoder";
import './session_form.css'

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
                this.props.history.push('/login') :
                this.props.history.push('/')
                
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
            .then( () => this.props.closeModal())

    }
    demoUser(e){
        e.preventDefault();
        // this.props.login(this.props.demoUser)
        this.props.login({email: "guest@email.com",password: "daniel"})
            .then(() => this.props.closeModal());
    }
    sessionErrors(){
        return(
            <ul >
                {Object.keys(this.props.errors).map((error,i)=>(
                    <li key={`error-${i}`}>
                        Invalid login credentials: {error}
                    </li>
                ))}
            </ul>
        )
    }

    render(){
        const { formType, navLink, openModal } = this.props;
        return (
            <div className='sfc'>
                <div className="sf">

                    {formType === 'Sign up'?
                        <div className="sf-header">
                            <span>
                                Have an account? 
                                <a onClick={() => openModal('login')}> Login </a>
                            </span>
                            <h3>{formType}</h3>
                        </div>: 
                        <div>
                            <h3 className="sf-header">Welcome!</h3>
                        </div>
                    }
                    
                    {this.sessionErrors()}
                    
                    <form onSubmit={this.handleSubmit} className="sf-form">
                        {formType === 'Sign up'?
                            <div className="form-item">
                            <input 
                                type="text"
                                className="form-item form-input"
                                placeholder="Name"
                                value={this.state.username}
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
                        {formType === 'Sign up'?
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

                        {formType === 'Sign up' ?
                            null : <div>New to EcoRoute?
                                <a onClick={() => openModal('signup')}> Sign up </a>
                            </div>}

                        {formType === 'Sign up'?
                            <div className="form-item">
                                <LoginGeocoder setParentState={geoObject => this.setState(geoObject)}/>
                            </div>
                        : null}

                        <button className="form-button form-item session-form-submit">
                            {formType === "Login" ? formType : "Create account"}
                        </button>
                        
                        <button className="form-item demo-button translatey-med" onClick={this.demoUser}>Demo User</button>
                        
                    </form>
                </div>
            </div>
        )
    }


}

export default withRouter(SessionForm);


