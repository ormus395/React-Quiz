let quiz = [
  {
    id: 0,
    question: 'Which of the following methods render a React element to the DOM?',
    choices: {
      A: 'ReactDOM.render()',
      B: 'React.createElement()',
      C: 'this.setState()',
      D: 'componentWillMount()'
    },
    correct: 'A',
    point: 1
  },
  {
    id: 1,
    question: 'Which type of component is responsible for state?',
    choices: {
      A: 'A functional component',
      B: 'A class component',
      C: 'A key component'
    },
    correct: 'B',
    point: 1
  },
  {
    id: 2,
    question: 'Is JSX HTML?',
    choices: {
      A: 'True',
      B: 'False'
    },
    correct: 'B',
    point: 1
  },
  {
    id: 3,
    question: 'To update component state correctly, one must...',
    choices: {
      A: 'Use the this.setState()',
      B: 'Update the state directly'
    },
    correct: 'A',
    point: 1
  }
]

export default quiz