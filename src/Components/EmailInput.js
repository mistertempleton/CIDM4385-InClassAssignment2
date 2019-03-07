import React, { Component } from 'react';

class EmailInput extends Component {

    //constructor
    constructor(props){
        super(props);

        //state
        this.state = {
            email: ''
        }

        //event handlers
        this.onEmailChange = this.onEmailChange.bind(this);
    }

    onEmailChange(event) {

        var email = event.target.value;

        //this is lifting the state value to the parent
        this.props.onEmailInputChange(email);

        this.setState( () => {
                return {
                    email
                }
            }
        );
    };

    render() {
        return (
            <div className="form-group">
                {/* <p>Test message: {this.props.test}</p> */}
                <label htmlFor="exampleInputEmail1">Enter Your Email address</label>
                <input 
                    aria-describedby="emailHelp" 
                    className="form-control" 
                    id="exampleInputEmail1" 
                    onChange={this.onEmailChange}
                    placeholder="Enter valid email"
                    type="email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"    // characters followed by an @ sign, followed by more characters, and then a ".", then at least 2 letters from a to z:
                    value={this.state.email}  />
            </div>
        );
    };
}

export default EmailInput;