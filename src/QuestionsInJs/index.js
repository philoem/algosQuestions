import React from 'react';
import BackToHome from '../Components/goBack';
import FirstQuestion from './FirstQuestion';
import SecondQuestion from './SecondQuestion';
import ThirdQuestion from './ThirdQuestion';

function QuestionsInJs() {
  return (
    <div className="w-100">
      <div className="navbar bg-base-100">
        <BackToHome />
      </div>
      <FirstQuestion />
      <SecondQuestion />
      <ThirdQuestion />
    </div>
  );
}

export default QuestionsInJs;
