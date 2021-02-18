import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {

	return (
		<>
			<div className="home">
				<div className="home__container">
					<div className="home__logo-wrap">
						<span className="mdi mdi-cube-outline cube"></span>
					</div>
					<h1 className="logo__title">Rock App</h1>
					<div className="home__btn-wrap">
						<ul>
							<li>
								<Link className="home__btn home__btn-play" to="/play/quiz">Play</Link>
							</li>
							{/* <li>
								<Link className="home__btn home__btn-choice" to="/play/choice">Выбор уровня</Link>
							</li> */}
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home