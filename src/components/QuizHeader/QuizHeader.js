import React, { Component } from 'react'
import './QuizHeader.css'

const QuizHeader = ({ current, quiz }) => (
  <header className="quiz-header">
      <h5>Question {current + 1} of {quiz.length}</h5>
      <p>point: {quiz[current].point}</p>
  </header>
)

export default QuizHeader