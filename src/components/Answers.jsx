import { useRef } from "react";

export default function Answers({answers, selectedAnswer, answerState, onSelect}){
  const shuffledAnswers = useRef();

  if(!shuffledAnswers.current){
    // shuffledAnswers.current = [...QUESTIONS [activeQuestionIndex].answers];
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() -0.5);     //this function is used for shuffling them  answer with the math.random method
  }


  return(
    <>
    <ul id="answers">
        {/* {QUESTIONS [activeQuestionIndex].answers.map((answer) =>( */}
        {/* {shuffledAnswers.map((answer) =>(
          <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)} >{answer}</button>
          </li>
        ))} */}
        {/* {shuffledAnswers.map((answer) => { */}
        {shuffledAnswers.current.map((answer) => {
          // const isSelected = userAnswers[userAnswers.length -1] === answer;
          const isSelected = selectedAnswer === answer;
          let cssClass = '';

          if (answerState === 'answered' && isSelected) {
            cssClass = 'selected';
          }

          if ((answerState === "correct" || answerState === 'wrong') && isSelected){
            cssClass = answerState;
          }

          return(
          <li key={answer} className="answer">
              {/* <button onClick={() => handleSelectAnswer(answer)} className={cssClass}>{answer}</button> */}
              <button onClick={() => onSelect(answer)} className={cssClass} disabled={answerState !== ''}>{answer}</button>
          </li>);
            
        }
        
        )}
        </ul>
    </>
  );
}