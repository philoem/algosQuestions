import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'

function SecondQuestion() {
	const words = `const word1 = 'Chien'; \nconst word1 = 'Niche';`
	const wordsRegexed = `word1.toLowerCase().split('').sort(); \nconsole.log(word1) // output: ["c", "e", "h", "i", "n"] \nword2.toLowerCase().split('').sort(); \nconsole.log(word2) // output: ["c", "e", "h", "i", "n"]`
	const result = `function checkAnagram(string1, string2) {
    return string1.toLowerCase().split('').sort() === string2.toLowerCase().split('').sort();
  }
  checkAnagram('Chien', 'Niche'); // output: true`
	return (
		<div className="grid grid-cols-3 gap-3 place-content-center h-full px-5 border mb-4">
			<div>
				<div className="flex items-center">
					<p>
						<strong>Question 2:</strong> comparer 2 mots pour voir si l'un est l'anagramme de
						l'autre
					</p>
				</div>
				<SyntaxHighlighter language="javascript" style={dracula}>
					{words}
				</SyntaxHighlighter>
			</div>
			<div>
				<div className="flex items-center">
					<p>Solution:</p>
				</div>
				<SyntaxHighlighter language="javascript" style={dracula}>
					{wordsRegexed}
				</SyntaxHighlighter>
			</div>
			<div>
				<div className="flex items-center">
					<p>Résultat:</p>
				</div>
				<SyntaxHighlighter language="javascript" style={dracula}>
					{result}
				</SyntaxHighlighter>
			</div>
		</div>
	)
}

export default SecondQuestion
