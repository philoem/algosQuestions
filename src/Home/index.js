import { useNavigate } from 'react-router-dom'
import logo from '../logo.svg'
import '../App.css'
import styles from './index.module.css'

function Home() {
	const navigate = useNavigate()
	return (
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<div className={styles.textHome}>
				<p>Medley de questions techniques:</p>
				<p>
					en <code className={styles.textCode}>javascript</code>
				</p>
			</div>
			<button type="button" className={styles.btnGoAlgos} onClick={() => navigate('/questionInJs')}>
				Go to algos
			</button>
		</header>
	)
}

export default Home
