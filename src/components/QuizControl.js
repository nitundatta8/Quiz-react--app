import React from 'react';
import { useState } from 'react';
import QuizForm from './QuizForm';
import { withFirestore, isLoaded } from 'react-redux-firebase';
import QuizList from './QuizList';

function QuizControl() {
  const [addFormVisible, setFormVisible] = useState(false);
  return (
    <React.Fragment>
      {addFormVisible ? <QuizForm setFormVisible={setFormVisible} /> : <QuizList setFormVisible={setFormVisible} />}
      <h1>QuizControl</h1>
    </React.Fragment>
  );
};

export default withFirestore(QuizControl);