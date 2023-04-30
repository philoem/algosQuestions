import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import BackToHome from '../Components/goBack';

function QuestionsInJs() {
  const codeStringMyArray = 'const myArray = [1,2,3,4,5,6];';
  const codeStringResultFirst = 'const resultFirst = Math.max(...myArray);';
  const codeStringResultSecond =
    'const resultSecond = myArray.reduce((x,y) => (x > y) ? x : y);';
  // const codeStringOutput = 'Ouput 6';
  return (
    <div className="w-100">
      <div className="navbar bg-base-100">
        <BackToHome />
      </div>
      <div className="grid grid-cols-3 gap-3 place-content-center h-28 px-5 border">
        <div>
          <div className="flex items-center">
            <p>Question 1: trouver le chiffre le plus grand dans le tableau</p>
          </div>
          <SyntaxHighlighter language="javascript" style={dracula}>
            {codeStringMyArray}
          </SyntaxHighlighter>
        </div>
        <div>
          <div className="flex items-center">
            <p>1ère solution: utiliser Math</p>
          </div>
          <SyntaxHighlighter language="javascript" style={dracula}>
            {codeStringResultFirst}
          </SyntaxHighlighter>
        </div>
        <div>
          <div className="flex items-center">
            <p>2ème solution: utiliser reduce</p>
          </div>
          <SyntaxHighlighter language="javascript" style={dracula}>
            {codeStringResultSecond}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}

export default QuestionsInJs;
