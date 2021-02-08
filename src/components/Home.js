import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {

	return (
		<>
			<div id="home">
				<section>
					<div style={{textAlign: 'center'}}>
						<span className="mdi mdi-cube-outline cube"></span>
					</div>
					<h1>Rock App</h1>
					<div className="play-button-container">
						<ul>
							<li><Link className="play-button" to="/play/quiz">Play</Link></li>
						</ul>
					</div>
				</section>
			</div>
		</>
	)
}

export default Home