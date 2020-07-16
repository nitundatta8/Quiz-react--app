import React from 'react';
import { useState } from 'react';

export default function QuizCard(props) {
  const { quiz, setQuizVisible } = props;
  const [check, setCheck] = useState("")
  const changeView = () => {
    setQuizVisible("QuizList");
  };

  return (
    <React.Fragment>

      <label htmlFor="q1">{quiz.q1} </label>
      <input name="q1" onChange={e => setCheck(e.target.value)} type="text" />
      <button onClick={changeView}>Check Answer</button>
    </React.Fragment>
  );
};