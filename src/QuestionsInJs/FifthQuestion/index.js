import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import styles from '../styles/questionsInJs.module.css'

function FifthQuestion() {
	const checkSpace = 'const iseEqualTo100 = (a, b) => a ===100 || b === 100 || (a+b) === 100;'
	return (
		<div className={styles.container}>
			<div className={styles.firstSubContainer}>
				<p>
					<strong>Question 5:</strong> Comparer 2 nombres et retourner true si un des 2 nombres est
					égal à 100 ou si la somme des 2 nombres est égale à 100
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

export default FifthQuestion
