import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/Home'
import Play from './components/Play'
import QuizSummary from './components/QuizSummary'
// import QuizInstructions from './components/quiz/QuizInstructions'


function App() {
  return (
    <Router>
			<Route exact path="/" component={Home} />
			<Route exact path="/play/quiz" component={Play} />
			<Route exact path="/play/quizSummary" component={QuizSummary} />
		</Router>
	
	)
}

export default App


