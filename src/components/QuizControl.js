import React from 'react';
import { useState } from 'react';
import QuizForm from './QuizForm';
import { withFirestore, isLoaded } from 'react-redux-firebase';
import QuizList from './QuizList';
import QuizCard from './QuizCard';
//import { useState } from 'react';

function QuizControl() {

  const [addFormVisible, setFormVisible] = useState(false);
  const [addQuestionFormVisible, setQuestionFormVisible] = useState(false);
  let a = {};
  const formVisible = (formName) => {
    if (formName == "quizForm") {
      setFormVisible(true);
      setQuestionFormVisible(false);
    } else if (formName == "quizAns") {
      setFormVisible(false)
      setQuestionFormVisible(true);
    } else {
      setFormVisible(false);
      setQuestionFormVisible(false);
    }
  }

  return (

    <React.Fragment>


      {addFormVisible ? <QuizForm setFormVisible={formVisible} /> : addQuestionFormVisible ? <QuizCard setFormVisible={formVisible} quiz={a} /> : <QuizList setFormVisible={setFormVisible} />}


    </React.Fragment>
  );
};

export default withFirestore(QuizControl);