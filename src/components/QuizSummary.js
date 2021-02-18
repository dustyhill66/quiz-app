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
			remark = 'Ты сможешь лучше!'
		} else if(userScore <= 70 && userScore > 50) {
			remark = 'Ты можешь лучше!'
		} else if(userScore >= 71 && userScore < 84) {
			remark = 'Хорошо! Ты ответил почти на все вопросы правильно'
		} else {
			remark = 'Круто! Ты ответил правильно на все вопросы!'
		}

		if(props.location.state.playerStats.score !== undefined) {
			stats = (
				<>
					<h1 className="header__text">Игра завершена</h1>
					<div className="stats__wrap stats">
						<h4 className="verdict">{remark}</h4>
						<h2 className="user-score">Твой счет:: {userScore.toFixed(0)}&#37;</h2>
						<span className="stat left">Общее количество вопросов: </span>
						<span className="right">{props.location.state.playerStats.numOfAnsweredQuestions}</span><br />

						<span className="stat left">Число правильных ответов: </span>
						<span className="right">{props.location.state.playerStats.correctAnswers}</span><br />
						
						<span className="stat left">Число ошибочных ответов: </span>
						<span className="right">{props.location.state.playerStats.wrongAnswers}</span><br />
					</div>
					<div className="btn__wrap">
						<Link className="btn__restart" to="/play/quiz">Начать игру</Link>
						<Link className="btn__back" to="/">Вернуться в главное меню</Link>
					</div>
				</>
			)
		} else {
			stats = (
				<section>
					<h1 className="no-stats">Что-то пошло не так</h1>
					<Link className="btn__restart" to="/play/quiz">Начать игру</Link>
					<Link className="btn__back" to="/">Вернуться в главное меню</Link>
				</section>
			)
			
		} 
		return (
			<>
				<div className="quiz-summary__container">
					{stats}
				</div>
			</>
		)
		
}

export default QuizSummary