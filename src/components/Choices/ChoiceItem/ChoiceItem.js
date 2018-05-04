import React, {Component} from 'react';
import './ChoiceItem.css';

const QuestionItem = ({choiceId, choiceContent, check, id}) => (
  <div className="choice-item" onClick={() => check(id, choiceId)}><span>{choiceId}:</span> <li> {choiceContent}</li></div>
)

export default QuestionItem