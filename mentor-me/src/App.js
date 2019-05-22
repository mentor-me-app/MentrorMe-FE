import React from 'react';
import Navbar from './components/layout/Navbar'
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import SignIn from './components/auth/SignIn';
import QuestionList from './components/questions/QuestionList';
import SignUp from './components/auth/SignUp'
import CreateQuestion from './components/questions/CreateQuestion'
import IndividualQuestion from './components/questions/IndividualQuestion'
import PrivateRoute from './PrivateRoute'
import UpdateQuestion from './components/questions/UpdateQuestion'

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar /> 
      
      <Route exact path='/' component={QuestionList} />
      <Route path='/signin' component={SignIn} />
      <Route path='/signup' component={SignUp} />
      <Route path='/question/:id'  component={IndividualQuestion} />
      {/* <Route path='/question/:id' render={props => (
          <IndividualQuestion {...props}
          questions={props.questions}
            />
        )}/> */}
      <Route path='/create' component={CreateQuestion} /> 
      {/* <Route path='/update' component={UpdateQuestion} /> */}
    </div>
    </Router>
  );
}

// const mapStateToProps = state => ({
//   questions:state.questions
// })

// export default connect(mapStateToProps)
// (App);


export default App;