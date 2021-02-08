import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const QuizSummary = (props) => {
	// const [score, setScore] = useState(0)
	// const [numOfQuestions, setNumOfQuestions] = useState(0)
	// const [numOfAnsweredQuestions, setNumOfAnsweredQuestions] = useState(0)
	// const [correctAnswers, setCorrectAnswers] = useState(0)
	// const [wrongAnswers, setWrongAnswers] = useState(0)

		
		console.log(props.location)
		//const {state} = props.location
		let stats
		let remark
		const userScore = props.location.state.playerStats.score / props.location.state.playerStats.numOfAnsweredQuestions * 100


		if(userScore <= 30) {
			remark = 'Тебе нужно больше тренироваться!'
		} else if(userScore > 30 && userScore <= 50) {
			remark = 'Better luck next time!'
		} else if(userScore <= 70 && userScore > 50) {
			remark = 'You can do better!'
		} else if(userScore >= 71 && userScore < 84) {
			remark = 'You did great!'
		} else {
			remark = 'You\'re an absolute genius'
		}

		if(props.location.state.playerStats.score !== undefined) {
			stats = (
				<>
					<div style={{ textAlign: 'center' }}>
						<span className="mdi mdi-check-circle-outline succes-icon"></span>
					</div>
					<h1>Игра завершена</h1>
					<div className="container stats">
						<h4>{remark}</h4>
						<h2>Твой счет:: {userScore.toFixed(0)}&#37;</h2>
						<span className="stat left">Общее количество вопросов: </span>
						<span className="right">{props.location.state.playerStats.numOfAnsweredQuestions}</span><br />

						<span className="stat left">Число правильных ответов: </span>
						<span className="right">{props.location.state.playerStats.correctAnswers}</span><br />
						
						<span className="stat left">Число ошибочных ответов: </span>
						<span className="right">{props.location.state.playerStats.wrongAnswers}</span><br />
					</div>
					<section>
						<ul>
							<li>
								<Link to="/play/quiz">Начать новую игру</Link>
							</li>
							<li>
								<Link to="/">Вернуться в главное меню</Link>
							</li>
						</ul>
					</section>
				</>
			)
		} else {
			stats = (
				<section>
					<h1 className="no-stats">No Statistics Available</h1>
					<ul>
						<li>
							<Link to="/play/quiz">Начать игру</Link>
						</li>
						<li>
							<Link to="/">Вернуться в главное меню</Link>
						</li>
					</ul>
				</section>
			)
			
		} 
		return (
			<>
				<div className="quiz-summary">
					{stats}
				</div>
			</>
		)
		
}

export default QuizSummary