import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import styles from '../styles/questionsInJs.module.css'

function ThirdQuestion() {
	const checkBool = `function checkArguments(x, y) {
    if (x === 1 || y === 1 || (x+y === 1)) {
      return true;
    } else {
      return false;
    }
  }`
	return (
		<div className={styles.container}>
			<div className={styles.firstSubContainer}>
				<p>
					<strong>Question 3:</strong> Retournez un booléen à l'appel d'une fonction
				</p>
			</div>
			<div>
				<div className={styles.secondSubContainer}>
					<p>Solution:</p>
				</div>
				<SyntaxHighlighter language="javascript" style={dracula}>
					{checkBool}
				</SyntaxHighlighter>
			</div>
		</div>
	)
}

export default ThirdQuestion
