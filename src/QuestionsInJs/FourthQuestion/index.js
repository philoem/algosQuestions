import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import styles from './index.module.css'

function FourthQuestion() {
	const checkSpace = `const myText = 'Too much   space';`
	const resultSpace = `myText.replace(/ {1,}/g, "");
  myText.trim();`
	return (
		<div className={styles.container}>
			<div>
				<div className={styles.firstSubContainer}>
					<p>
						<strong>Question 4:</strong> Comment supprimer les espaces en trop dans une string
					</p>
				</div>
				<SyntaxHighlighter language="javascript" style={dracula}>
					{checkSpace}
				</SyntaxHighlighter>
			</div>
			<div>
				<div className={styles.secondSubContainer}>
					<p>Solution:</p>
				</div>
				<SyntaxHighlighter language="javascript" style={dracula}>
					{resultSpace}
				</SyntaxHighlighter>
			</div>
		</div>
	)
}

export default FourthQuestion
