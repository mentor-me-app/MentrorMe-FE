import React from 'react'
import Icon from '@material-ui/core/Icon';
import { deleteQuestion } from '../../actions'
import UpdateQuestion from './UpdateQuestion'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import moment from 'moment'


class EachQuestion extends React.Component {

    constructor() {
        super()
        this.state = {
            activeQuestion: null,
            editingID: false
        }
    }

    updateSubmit = (event, question) => {
        event.preventDefault();
        console.log('each question props ', question)
        this.setState({
            activeQuestion: question,
            editingID: true
        })
        console.log('each question state ', this.state.activeQuestion)

    }

    deleteSubmit = (event, id) => {
        event.preventDefault();
        this.props
            .deleteQuestion(id)
            .then(() => window.location.reload())
            .catch(err => console.log(err))



    }

    render() {


        return (
            <div className='card z-depth-1 project-summary'>
                <div className='card-content grey-text text-darken-3 icon-wrapper'>
                    <div className='right'>
                        {/* <Icon onClick={(event)=>this.updateSubmit(event,this.props.question)}>edit</Icon>
                    <Icon onClick={(event)=>this.deleteSubmit(event,this.props.question.id)}>delete_forever</Icon> */}
                        <i className="material-icons blue-text crud" onClick={(event) => this.updateSubmit(event, this.props.question)} style={{cursor:'pointer'}}>edit</i>
                        <i className="material-icons red-text crud" onClick={(event) => this.deleteSubmit(event, this.props.question.id)} style={{cursor:'pointer'}}>delete</i>
                    </div>
                    <Link to={`/question/${this.props.question.id}`}>
                        <span className='card-title grey-text text-darken-3'>{this.props.question.content}</span>
                    </Link>
                    <p className='card-title grey-text text-darken-3'>{this.props.question.topic}</p>

                    {/* <p className='grey-text'>{moment(this.props.question.updated_at,'MMMM Do YYYY, h:mm:ss a').toString()}</p> */}
                    {this.state.editingID && <Route to='/update' render={props => (
                        <UpdateQuestion {...props} question={this.state.activeQuestion} />
                    )} />}
                </div>
                {/* {moment(this.props.dataProp.timestamp,'MMMM Do YYYY, h:mm:ss a').fromNow()}{this.props.question.updated_at} */}
            </div>
        )
    }
}
// export default EachQuestion

const mapStateToProps = (state) => ({
    updateQuestion: state.updateQuestion,
    deletingQuestions: state.deletingQuestions,
    editingQuestions: state.editingQuestions,
    error: state.error
})
export default connect(
    mapStateToProps, { deleteQuestion }
)(EachQuestion)