import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'

function FourthQuestion() {
	const checkSpace = `const myText = 'Too much   space';`
	const resultSpace = `myText.replace(/ {1,}/g, "");
  myText.trim();`
	return (
		<div className="grid grid-cols-3 gap-3 place-content-center h-full px-5 border mb-4">
			<div>
				<div className="flex items-center">
					<p>
						<strong>Question 4:</strong> Comment supprimer les espaces en trop dans une string
					</p>
				</div>
				<SyntaxHighlighter language="javascript" style={dracula}>
					{checkSpace}
				</SyntaxHighlighter>
			</div>
			<div>
				<div className="flex items-center">
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
