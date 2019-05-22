import React from 'react'
import { connect } from 'react-redux';
import EachQuestion from './EachQuestion'
import {getQuestion, searchQuestion} from '../../actions'
import {Link} from 'react-router-dom'

class QuestionList extends React.Component{
    constructor(){
        super()
        this.state = {
            search:''
        }
    }

    componentDidMount(){
        this.props.getQuestion();
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(event)
        this.props
        .searchQuestion(this.state.search)
        .then(() => this.props.history.push('/'))
        .catch(err => console.log('err happened in the search submit area', err))
        this.setState({
            search:''
        })
    }

     handleChange = (event) => {
        console.log(event)
        this.setState({
        [event.target.id]:event.target.value
    })
    }

    render(){
        // console.log(this.props.questions)
        return (
            <div className = 'question-list section'>
            <div className='row'>
            <ul className='col s12 m6 offset-m1'>
                    <li>
                <form  className='search-form' onSubmit={this.handleSubmit} >

                    {/* <div className='right'> */}

                        <input type='text' id='search' className='search white'
                            placeholder='search'
                            onChange={this.handleChange}></input>
                    {/* </div> */}
                </form>
                </li>
                </ul>
                <div className='col s12 m6 offset-m1'>
            <ul>
                {/* <h1>QuestionList</h1> */}
            {this.props.questions.map(question => 
            // <Link to={`/question/${question.id}`}>
                <EachQuestion question={question} key={question.id}/>
                // </Link>
            )}
            </ul>
            </div>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    questions:state.questions,
    fetchingQuestions:state.fetchingQuestions,
    search:state.search
})

export default connect(
    mapStateToProps , {getQuestion,searchQuestion}
    )(QuestionList)