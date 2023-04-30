import React from 'react';
import BackToHome from '../Components/goBack';
import FirstQuestion from './FirstQuestion';
import SecondQuestion from './SecondQuestion';

function QuestionsInJs() {
  return (
    <div className="w-100">
      <div className="navbar bg-base-100">
        <BackToHome />
      </div>
      <FirstQuestion />
      <SecondQuestion />
    </div>
  );
}

export default QuestionsInJs;
