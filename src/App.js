import React, { useEffect, useState } from "react";
import data from "./data.txt";
import Question from "./components/Question";
import RightArrowIcon from "./assets/icons/arrow-right-solid.svg";
import LeftArrowIcon from "./assets/icons/arrow-left-solid.svg";

function App() {
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);

  useEffect(() => {
    const selectRandomElements = (count, array) => {
      const shuffledArray = array.sort(() => 0.5 - Math.random());
      console.log(shuffledArray.slice(0, count));
      return shuffledArray.slice(0, count);
    };

    fetch(data)
      .then((r) => r.json())
      .then((questions) => setQuestions(selectRandomElements(15, questions)));
  }, []);

  const handleNext = () => {
    setQuestionIndex((questionIndex + 1) % questions.length);
  };

  const handlePrevious = () => {
    if (questionIndex === 0) {
      setQuestionIndex(questions.length - 1);
    } else {
      setQuestionIndex(questionIndex - 1);
    }
  };

  return (
    <div className="container relative mx-auto flex h-screen flex-col p-4">
      <header>JavaScript Quiz Playground</header>
      <div className="flex h-full justify-between">
        <button onClick={handlePrevious}>
          <img src={LeftArrowIcon} className="nav-btn" />
        </button>
        {questions.length && (
          <Question index={questionIndex} question={questions[questionIndex]} />
        )}
        <button onClick={handleNext}>
          <img src={RightArrowIcon} className="nav-btn" />
        </button>
      </div>
      <div className="mt-3 flex justify-between gap-4">
        <button className="mb-4 flex-1" onClick={handlePrevious}>
          <img src={LeftArrowIcon} className="mobile-nav-btn" />
        </button>
        <button className="mb-4 flex-1" onClick={handleNext}>
          <img src={RightArrowIcon} className="mobile-nav-btn" />
        </button>
      </div>
    </div>
  );
}

export default App;
