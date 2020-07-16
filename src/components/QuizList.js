import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import Quiz from './Quiz';
//import { useFirestore } from 'react-redux-firebase';
//import 'firebase/firestore';



export default function QuizList(props) {
  const { setFormVisible } = props;
  //const firestore = useFirestore();

  const chanceView = () => {
    setFormVisible(true);
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
            quiz={quiz} key={quiz.id}
          />

        })};

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