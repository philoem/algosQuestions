import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import styles from './index.module.css'

function SixthQuestion() {
	const checkExtension =
		'const getFileExtension = (string) => string.slice(string.lastIndexOf("."))\nconsole.log(getFileExtension("index.html"));\n//output: .html'
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
					{checkExtension}
				</SyntaxHighlighter>
			</div>
		</div>
	)
}

export default SixthQuestion
