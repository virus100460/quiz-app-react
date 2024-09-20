// import React, { useCallback, useRef, useState } from 'react'
import React, { useCallback, useState } from 'react'
import QUESTIONS from '../questions.js'
// import quizIsCompleteImg from '../assets/quiz-complete.png'
import Question from './Question.jsx';
import Summary from './Summary.jsx'


// import QuestionTimer from './QuestionTimer.jsx';
// import Answers from './Answers.jsx';
export default function Quiz() {
    // const shuffledAnswers = useRef();
    // const [answerState, setAnswerState] = useState('');
    // const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);

    // const activeQuestionIndex = userAnswers.length;
    // const activeQuestionIndex = answerState === '' ?  userAnswers.length : userAnswers.length -1;

    //const shuffledAnswers = [...QUESTIONS [activeQuestionIndex].answers];
    //shuffledAnswers.sort(() => Math.random() -0.5);     //this function is used for shuffling them  answer with the math.random method
    const activeQuestionIndex = userAnswers.length ;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
    // const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback( function handleSelectAnswer(selectedAnswer){

      //setAnswerState('answered');

      setUserAnswers((prevUserAnswers) => {
        return [...prevUserAnswers, selectedAnswer];
      });

      // setTimeout(() => {
      //   if(selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
      //     setAnswerState('correct');
      //   }
      //   else{
      //     setAnswerState('wrong');
      //   }

      //   setTimeout(() => {
      //     setAnswerState('');
      //   }, 2000);

      // },1000);
    // }, [activeQuestionIndex]);
    }, []);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    if(quizIsComplete) {
      return(
        // <div id='summary'>
        //   <img src={quizIsCompleteImg} />
        //   <h2>Quiz Completed !!!</h2>
        // </div>
        <Summary userAnswers={userAnswers} />
      );
    }

    // const shuffledAnswers = [...QUESTIONS [activeQuestionIndex].answers];
    // shuffledAnswers.sort(() => Math.random() -0.5);     //this function is used for shuffling them  answer with the math.random method

    // if(!shuffledAnswers.current){
    //   shuffledAnswers.current = [...QUESTIONS [activeQuestionIndex].answers];
    //   shuffledAnswers.current.sort(() => Math.random() -0.5);     //this function is used for shuffling them  answer with the math.random method
    // }
    
  return (
    // <p>Currently Active Question</p>
    <div id='quiz'>
        <Question 
        key={activeQuestionIndex}
        index={activeQuestionIndex}
          // questionText={QUESTIONS [activeQuestionIndex].text} 
          // answers={QUESTIONS [activeQuestionIndex].answers} 
          // answerState={answerState}
          // selectedAnswer={userAnswers[userAnswers.length -1]}
          onSelectAnswer={handleSelectAnswer}
          onSkipAnswer={handleSkipAnswer}

        />
    </div>
  );
}
