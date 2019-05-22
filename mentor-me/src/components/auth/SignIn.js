import React from 'react'
import {connect} from 'react-redux'
import {login} from '../../actions'

class SignIn extends React.Component{
    constructor(){
        super()
            this.state = {
                email:'',
                password:''
            
        }
    }

    handleChange = (event)=> {
        // console.log(event)
        this.setState({
            [event.target.id]:event.target.value
        })
    }

    handleSubmit = (event) => {
        // console.log(event)
        event.preventDefault();
        // console.log(this.state)
        console.log('error occured while signing in ',this.props.error)
        this.props.login(this.state)
        .then(() => {
            this.props.history.push('/')
        })
        .catch(err => {
            console.log(err)
        })
    }

    render(){
        return (
            <div className='sign-in container'>
                <form onSubmit={this.handleSubmit} className='white'>
                    <h5 className='grey-text text-darken-3'>Sign In</h5>
                    <div className='input-field'>
                        <label htmlFor='email'>Email </label>
                        <input type='email' id='email' onChange={this.handleChange}></input>
                    </div>

                    <div className='input-field'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' onChange={this.handleChange}></input>
                    </div>

                    <div className='input-field'>
                        <button className='btn pink lighten-1 z-depth-0'>Login</button>
                    </div>
                    <div className='red-text center'>
                    {this.props.error? <p>Invalid Credentials.Try Signing In again!</p>:null}
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isLoggingIn:state.isLoggingIn,
    error:state.error
})

export default connect(
    mapStateToProps, {login}
)(SignIn)