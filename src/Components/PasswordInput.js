import React, { Component } from 'react';

class PasswordInput extends Component {

    //constructor
    constructor(props){
        super(props);

        //state
        this.state = {
            password: ''
        }

        //event handlers
        this.onPasswordChange = this.onPasswordChange.bind(this);        
    }

    onPasswordChange(event){
        // const password = event.target.value;
        var password = event.target.value;

        //this is lifting the state value to the parent
        this.props.onPasswordInputChange(password);

        this.setState( () => {
                return {
                    password
                }
            }
        );
    };

    render() {
        return (
            <div className="form-group">
                {/* <p>Test message: {this.props.test}</p> */}
                <label htmlFor="exampleInputPassword1">Enter Your Password</label>
                <input 
                    // aria-describedby="passwordHelp"
                    className="form-control" 
                    id="exampleInputPassword1" 
                    onChange={this.onPasswordChange}
                    placeholder="Requires 8 characters with at least one number, one uppercase letter, and lowercase letter" 
                    type="password"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"          // Requires 8 characters with at least one number, one uppercase letter, and one lowercase letter
                    value={this.state.password}  />
            </div>
        );
    };
}

export default PasswordInput;