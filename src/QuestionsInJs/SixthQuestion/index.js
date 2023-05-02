import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import styles from './index.module.css'

function SixthQuestion() {
	const checkSpace = 'const iseEqualTo100 = (a, b) => a ===100 || b === 100 || (a+b) === 100;'
	return (
		<div className={styles.container}>
			<div className={styles.firstSubContainer}>
				<p>
					<strong>Question 6:</strong> Récupérer l'extension d'un nom de fichier
				</p>
			</div>
			<div>
				<div className={styles.secondSubContainer}>
					<p>Solution:</p>
				</div>
				<SyntaxHighlighter language="javascript" style={dracula}>
					{checkSpace}
				</SyntaxHighlighter>
			</div>
		</div>
	)
}

export default SixthQuestion
