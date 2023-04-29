import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import BackToHome from '../Components/goBack';

function QuestionsInJs() {
  const codeStringMyArray = 'const myArray = [1,2,3,4,5,6];';
  const codeStringResultFirst = 'const resultFirst = Math.max(...myArray);';
  const codeStringResultSecond =
    'const resultSecond = myArray.reduce((x,y) => (x > y) ? x : y);';
  const codeStringOutput = 'Ouput 6';
  return (
    <div>
      <BackToHome />
      <div>
        <summary>
          Question 1: trouver le chiffre le plus grand dans le tableau
        </summary>
      </div>
      <SyntaxHighlighter language="javascript" style={dracula}>
        {codeStringMyArray}
      </SyntaxHighlighter>
      <div>
        <section>
          <h2>1ère solution: utiliser Math</h2>
          <SyntaxHighlighter language="javascript" style={dracula} wrapLines>
            {codeStringResultFirst + codeStringOutput}
            {codeStringOutput}
          </SyntaxHighlighter>
        </section>
        <section>
          <h2>2ème solution: utiliser reduce</h2>
          <div>
            <SyntaxHighlighter language="javascript" style={dracula}>
              {codeStringResultSecond}
            </SyntaxHighlighter>
          </div>
        </section>
      </div>
    </div>
  );
}

export default QuestionsInJs;
