import React from 'react'
import {connect} from 'react-redux'
import {addQuestion} from '../../actions'

class CreateQuestion extends React.Component{
    constructor(){
        super()
            this.state = {
                topic:'',
                content:'',
                user_id:1
            
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
        console.log(this.state)
        this.props
        .addQuestion(this.state)
        .then(() => this.props.history.push('/'))
        .catch(err => {
            console.log('error while adding question ' , err)
        })
        this.setState({
            title:'',
            content:''
        })
    }

    render(){
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit} className='white'>
                    <h5 className='grey-text text-darken-3'>Post Question</h5>
                    <div className='input-field'>
                        <label htmlFor='title'>Topic </label>
                        <input type='text' id='topic' onChange={this.handleChange}></input>
                    </div>

                    <div className='input-field'>
                        <label htmlFor='content'>Ask your question</label>
                        <textarea  id='content' className='materialize-textarea' onChange={this.handleChange}></textarea>
                        
                    </div>

                    <div className='input-field'>
                        <button className='btn pink lighten-1 z-depth-0'>Post</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    addingQuestions:state.addingQuestions,
    error:state.error
})
export default connect(
    mapStateToProps, {addQuestion}
)(CreateQuestion)