import React from 'react'
import { connect } from 'react-redux'
import { signup } from '../../actions'

class SignUp extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            firstname: '',
            lastname: ''

        }
    }

    handleChange = (event) => {
        // console.log(event)
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = (event) => {
        // console.log(event)
        event.preventDefault();
        console.log(this.state)
        this.props.signup(this.state)
            .then(() => {
                this.props.history.push('/')
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit} className='white z-depth-2'>
                    <h5 className='grey-text text-darken-3'>Sign Up</h5>
                    <div className='input-field'>
                        <label htmlFor='email'>Email </label>
                        <input type='email' id='email' onChange={this.handleChange}></input>
                    </div>

                    <div className='input-field'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' onChange={this.handleChange}></input>
                    </div>

                    <div className='input-field'>
                        <label htmlFor='lastName'>Last Name </label>
                        <input type='text' id='lastname' onChange={this.handleChange}></input>
                    </div>

                    <div className='input-field'>
                        <label htmlFor='firstName'>First Name </label>
                        <input type='text' id='firstname' onChange={this.handleChange}></input>
                    </div>

                    <div className='input-field'>
                        <button className='btn indigo accent-2'>SIGN UP
                        <i class="material-icons right">
                                arrow_upward
                        </i></button>
                    </div>
                </form>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    isSignedUp: state.isSignedUp
})

export default connect(
    mapStateToProps, { signup }
)(SignUp)