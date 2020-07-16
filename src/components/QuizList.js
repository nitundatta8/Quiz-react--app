import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import Quiz from './Quiz';

export default function QuizList(props) {
  const { setFormVisible } = props;


  const chanceView = () => {
    setFormVisible("QuizForm");
  };

  const val = useFirestoreConnect([
    { collection: 'quizes' }
  ]);


  const quizes = useSelector(state => state.firestore.ordered.quizes);
  // console.log(quizes)

  if (isLoaded(quizes)) {
    return (
      <React.Fragment>
        <h1>Quizes</h1>
        {quizes.map((quiz) => {
          return <Quiz
            quiz={quiz} key={quiz.id} formVisible={setFormVisible}
          />

        })}

        <button onClick={chanceView}>Create Your Own Quiz</button>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Loading ......</h3>
      </React.Fragment>
    );
  }

};