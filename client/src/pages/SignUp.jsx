import React, { Component } from "react";
import api from '../api/adminApi';
 class SignUp extends Component {
    constructor(props){
        super(props)
        this.state ={
            firstName: '',
            lastName: '',
            email: '',
            username: '',
            password: '',

        }
    }
    handleChangeFirstName = async(event)=>{
        const firstName = event.target.value;
        this.setState({firstName})
    }
    handleChangeLastName = async(event)=>{
        const lastName = event.target.value;
        this.setState({lastName})
    }
    handleChangeEmail = async(event)=>{
        const email = event.target.value;
        this.setState({email})
    }
    handleChangeUserName = async(event)=>{
        const username = event.target.value;
        this.setState({username})
    }
    handleChangePassword = async(event)=>{
        const password = event.target.value;
        this.setState({password})
    }
    handleIncludeAdmin = async() =>{
        const {firstName,lastName,email,username,password} = this.state;
        const payload = {firstName,lastName,email,username,password};
        await api.signup(payload).then((res)=>{
            window.alert('Signup Succesfully');
            this.setState({
                firstName: '',
                lastName: '',
                email: '',
                username: '',
                password: '',
            })
        })
    }
    render() {
        const {firstName,lastName,email,username,password} = this.state;
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" value={firstName} 
                        onChange = {this.handleChangeFirstName}
                    />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" value={lastName} 
                        onChange = {this.handleChangeLastName}
                    />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" value={email} 
                        onChange = {this.handleChangeEmail}
                    />
                </div>
                <div className="form-group">
                    <label>User Name</label>
                    <input type="text" className="form-control" placeholder="Enter UserName" value={username} 
                        onChange = {this.handleChangeUserName}
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" value={password} 
                        onChange = {this.handleChangePassword}
                    />
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={this.handleIncludeAdmin}>
                    Sign Up
                </button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
        );
    }
}
export default SignUp