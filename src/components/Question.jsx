import QuestionTimer from './QuestionTimer.jsx';
import Answers from './Answers.jsx';
import { useState } from 'react';
import QUESTIONS from '../questions.js'

export default function Question({
  // 
  index,
  //questionText, 
  //answers, 
  onSelectAnswer, 
  //selectedAnswer, 
  //answerState, 
  onSkipAnswer}){

  const [answer, setAnswer] = useState({
    selectedAnswer: '',
    isCorrect: null
  });

  let timer = 10000;
  if(answer.selectedAnswer){
    timer = 1000;
  }
  if(answer.isCorrect !== null){
    timer = 2000;
  }


  function handleSelectAnswer(answer){
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null
    })

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        // isCorrect: true
        // isCorrect: QUESTIONS[key].answers[0] === answer
        isCorrect: QUESTIONS[index].answers[0] === answer
      })

      setTimeout(() => {
          onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }



  let answerState = '';
  if(answer.selectedAnswer && answer.isCorrect !== null){
    answerState = answer.isCorrect ? 'correct' : 'wrong';
  }
  else if (answer.selectedAnswer){
    answerState = 'answered';
  }

  return(
    <div id="question">
    {/* <QuestionTimer  timeout={20000} 
    onTimeout={
      () => handleSelectAnswer(null)
      
      } /> */}

    <QuestionTimer  
      // key={activeQuestionIndex}                          
      // timeout={10000} 
      timeout={timer} 
      key={timer}
      // onTimeout={handleSkipAnswer}
      // onTimeout={onSkipAnswer}
      onTimeout={answer.selectedAnswer === '' ? onSkipAnswer : null}
      mode={answerState}
    />

  {/* <h2>{QUESTIONS [activeQuestionIndex].text}</h2> */}
  {/* <h2>{questionText}</h2> */}
  {/* <h2>{QUESTIONS[key].text}</h2> */}
  <h2>{QUESTIONS[index].text}</h2>
    {/* <Answers key={activeQuestionIndex}   */}
    <Answers  
      // answers={QUESTIONS [activeQuestionIndex].answers}
      // answers={answers} 
      // answers={QUESTIONS[key].answers} 
      answers={QUESTIONS[index].answers} 
      // selectedAnswer={userAnswers[userAnswers.length -1]} 
      // selectedAnswer={selectedAnswer} 
      selectedAnswer={answer.selectedAnswer} 
      answerState={answerState} 
      // onSelect={handleSelectAnswer}
      // onSelect={onSelectAnswer}
      onSelect={handleSelectAnswer}
    />
</div>
  );
}