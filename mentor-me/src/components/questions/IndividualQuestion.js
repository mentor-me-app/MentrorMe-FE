import React from 'react'
import Icon from '@material-ui/core/Icon';
// import DeleteIcon from '@material-ui/icons/Delete';
import {connect} from 'react-redux'

const IndividualQuestion = (props) => {
    console.log('individual question id',props.match.params.id)
    console.log('id received from questions',props.questions)
    const question = props.questions.find(
        thing => `${thing.id}` === props.match.params.id
    )
    console.log('matched question details ',question)
    if (!props.questions.length || !question) {
        return <h2>Loading item data...</h2>;
      }

    return(
        <div className='row'>
            <ul className='col s12 m6 offset-m1'>
        <div className='card z-depth-1 project-summary '>
                <div className='card-content grey-text text-darken-3'>
                    
                    <div className='right'>
                    {/* <Icon>edit</Icon>
                    <Icon>delete_forever</Icon> */}
                    {/* <i class="material-icons">edit</i>
                    <i class="material-icons">delete</i> */}
                    </div>
                    <span className='card-title'>{question.content}</span>
                    <p>{question.topic}</p>
                    
                    
                    
                    <p className='grey-text'>{question.updated_at}</p>
                </div>

            </div>
            </ul>
            </div>
    )
}
const mapStateToProps = state => ({
  questions:state.questions
})

export default connect(mapStateToProps)
(IndividualQuestion);