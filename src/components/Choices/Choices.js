import React, { Component } from 'react'
import './Choices.css'
import ChoiceItem from './ChoiceItem/ChoiceItem'

class Choices extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let {quiz} = this.props;
    let {current} = this.props;
    let list = [];
    for(let choice in quiz[current].choices) {
      list.push(<ChoiceItem 
        key={choice} 
        id={quiz[current].id}
        check={this.props.check}
        choiceId={choice} 
        choiceContent={quiz[current].choices[choice]} 
      />)
    }
    return (
      <div className="choices-container">
        <p>{quiz[current].question}</p>
        <ul>
          {list}
        </ul>
      </div>
    )
  }
}

export default Choices