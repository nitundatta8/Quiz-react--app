import React, { useState } from 'react';
import { useFirestore } from 'react-redux-firebase';



export default function QuizForm(props) {
  const firestore = useFirestore();
  console.log(" Quiz");
  console.log(firestore);

  const { setFormVisible } = props;

  const [name, setName] = useState('');
  const [q1, setQuestion] = useState('');
  const [a1, setAnswer] = useState('');

  const addQuiz = () => {
    console.log("Add Quiz..");
    setFormVisible(false);
    console.log({ name, q1, a1 })
    return firestore.collection('quizes').add({ name, q1, a1 });
  }


  return (
    <form >
      <label htmlFor="name">Name : </label>
      <input onChange={event => { setName(event.target.value) }} type="text" name="name" placeholder="Name Your Quiz" /><br />
      <label htmlFor="name">Question : </label>
      <input onChange={event => { setQuestion(event.target.value) }} type="text" name="q1" placeholder="Enter a Question." /><br />
      <label htmlFor="name">Answer : </label>
      <input onChange={event => { setAnswer(event.target.value) }} type="text" name="a1" placeholder="Enter the Answer." /><br />
      <button onClick={addQuiz}>Submit Quiz</button>
    </form >

  );
};