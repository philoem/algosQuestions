import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

function ThirdQuestion() {
  const checkBool = `function checkArguments(x, y) {
    if (x === 1 || y === 1 || (x+y === 1)) {
      return true;
    } else {
      return false;
    }
  }`;
  return (
    <div className="grid grid-cols-3 gap-3 place-content-center h-full px-5 border mb-4">
      <div className="flex items-center">
        <p>
          <strong>Question 3:</strong> Retournez un booléen à l'appel d'une
          fonction
        </p>
      </div>
      <div>
        <div className="flex items-center">
          <p>Solution:</p>
        </div>
        <SyntaxHighlighter language="javascript" style={dracula}>
          {checkBool}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default ThirdQuestion;
