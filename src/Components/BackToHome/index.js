import React from 'react';
import { useNavigate } from 'react-router-dom';

function BackToHome() {
  const navigate = useNavigate();
  const goTo = () => {
    console.log('TEST');
    navigate('/');
  };
  return (
    <div className="flex ustify-start">
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={goTo()}
      >
        Back to home
      </button>
    </div>
  );
}

export default BackToHome;
