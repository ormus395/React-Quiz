import React, { Component } from 'react';
import quiz from '../data/quiz';
import './QuizContainer.css';

import QuizHeader from '../components/QuizHeader/QuizHeader'
import Choices from '../components/Choices/Choices'

class QuizContainer extends Component {
  state = {
    quiz: quiz,
    current: 0
  }

  nextQuestion = () => {
    this.setState(prevState => ({current: prevState.current + 1}))
  }

  check = (id, choice) => { 
    let quizCopy = [...this.state.quiz];
    for(let i = 0; i < quizCopy.length; i++) {
      if(quizCopy[i].id === id) {
        if(quizCopy[i].correct === choice) {
          alert('YAY')
        } else {
          alert('NO')
        }
      }
    }
  }

  render() {
    return (
      <div className="quiz-container">
        <div className="container-content">
          <QuizHeader quiz={this.state.quiz} current={this.state.current} />
          <Choices quiz={this.state.quiz} current={this.state.current} check={this.check}/>
          <div className="button-container">
            <button onClick={this.nextQuestion}>Next</button>
          </div>
        </div>
      </div>
    )
  }
}

export default QuizContainer