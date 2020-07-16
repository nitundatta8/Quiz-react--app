import React from 'react';
import { useState } from 'react';
import QuizControl from './QuizControl';
import QuizCard from './QuizCard';

export default function Quiz(props) {
  const { quiz, key, formVisible } = props;
  const [quizVisible, setQuizVisible] = useState(false);
  const changeView = () => {
    formVisible("quizAns");
  };

  return (
    <React.Fragment>
      <h3>Quiz Name: {quiz.name}</h3>

      <button onClick={changeView}> Quiz</button>


    </React.Fragment>
  );
};