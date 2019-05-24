import React from 'react'
import { connect } from 'react-redux';
import EachQuestion from './EachQuestion'
import { getQuestion, searchQuestion } from '../../actions'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class QuestionList extends React.Component {
    constructor() {
        super()
        this.state = {
            search: '',
            tab: '',
            newlist: [],
            isTab: false

        }
    }

    componentDidMount() {
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
            search: ''
        })
    }

    handleChange = (event) => {
        console.log(event)
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    tabHandler = tab => {
        this.setState({
            tab: tab
        })



    }

    render() {

        return (
            <div className='question-list section'>
                <div className='row'>
                    <ul className='col s12 m6 l9 offset-l1'>
                        <li>
                            <form className='search-form z-depth-2' onSubmit={this.handleSubmit} >



                                <input type='text' id='search' className='search white z-depth-2'
                                    placeholder='search' style={{paddingLeft:10}}
                                    onChange={this.handleChange}></input>

                            </form>
                        </li>
                    </ul>

                    <div className='col s12 m6 l9 offset-l1'>
                        <ul className='tabs'>

                            {this.props.tabs.map(tab =>

                                <li className='tab col s12 m2 l1' style={{width:184}} >

                                    <a className='grey-text text-darken-3 topic' id='text' onClick={() => { this.tabHandler(tab) }}>{tab}</a>
                                </li>

                            )}
                        </ul>
                    </div>

                    




                    <div className='col s12 m6 l9 offset-l1'>

                        <ul>


                            {this.state.tab === 'all' ? this.props.questions.map(question =>

                                <EachQuestion question={question} key={question.id} />

                            ) : this.props.questions.filter(question => question.topic === this.state.tab).map(question =>

                                <EachQuestion question={question} key={question.id} />

                            )}
                        </ul>
                    </div>
                </div>
            </div>
        )

    }
}

const mapStateToProps = (state) => ({
    questions: state.questions,
    fetchingQuestions: state.fetchingQuestions,
    search: state.search,
    tabs: state.tabs
})

export default connect(
    mapStateToProps, { getQuestion, searchQuestion }
)(QuestionList)