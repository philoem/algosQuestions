import React from 'react'
import { Link } from 'react-router-dom'

const BackToHome = () => {
  return (
    <div class="flex ustify-start">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <Link to="/">Back to home</Link>
      </button>
    </div>
  )
}

export default BackToHome
