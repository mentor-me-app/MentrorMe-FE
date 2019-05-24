import React from 'react'
import { connect } from 'react-redux'
import { updateQuestion } from '../../actions'

class UpdateQuestion extends React.Component {

    constructor(props) {
        super(props)
        console.log('props after clicking update ', this.props)
        this.state = {
            questionInfo: this.props.question

        }
        console.log('update form state info ', this.state.questionInfo)
    }

    handleChange = (event) => {
        // event.persist()
        // console.log(event)
        // this.setState(prevState => ({
        //     questionInfo:{
        //         ...prevState.questionInfo,
        //     [event.target.name]:event.target.value
        //     }
        // }))
        this.setState({
            questionInfo: {
                ...this.state.questionInfo,
                [event.target.name]: event.target.value
            }
        })
    }

    handleSubmit = (event) => {
        // console.log(event)
        event.preventDefault();
        console.log(this.state)
        this.props
            .updateQuestion(this.state.questionInfo)
            .then(() => window.location.reload())
            // .then(() => this.props.history.push('/'))
            // .then(res =>  console.log('update question area success ', res))
            .catch(err => {
                console.log('error while adding question ', err)
            })
        this.setState({
            questionInfo: {
                title: '',
                content: ''
            }
        })
    }

    render() {
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit} className='white z-depth-2'>
                    <h5 className='grey-text text-darken-3'>Update Question</h5>
                    <div className='input-field'>
                        {/* <label htmlFor='title'>Topic </label> */}
                        <input type='text' name='topic'
                            value={this.state.questionInfo.topic}
                            onChange={this.handleChange}></input>
                    </div>

                    <div className='input-field'>
                        {/* <label htmlFor='content'>Ask your question</label> */}
                        <textarea name='content' className='materialize-textarea'
                            value={this.state.questionInfo.content}
                            onChange={this.handleChange}></textarea>

                    </div>

                    <div className='input-field'>
                        <button className='btn indigo accent-2'>Update</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    updateQuestion: state.updateQuestion,
    error: state.error
})
export default connect(
    mapStateToProps, { updateQuestion }
)(UpdateQuestion)