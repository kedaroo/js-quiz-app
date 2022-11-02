import React, { useEffect, useState } from "react";
import data from "./data.txt";
import Question from "./components/Question";
import RightArrowIcon from "./assets/icons/arrow-right-solid.svg";

function App() {
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showNext, setShowNext] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const selectRandomElements = (count, array) => {
      const shuffledArray = array.sort(() => 0.5 - Math.random());
      return shuffledArray.slice(0, count);
    };

    fetch(data)
      .then((r) => r.json())
      .then((questions) => setQuestions(selectRandomElements(15, questions)));
  }, []);

  const handleNext = () => {
    if (questionIndex === 14) {
      setShowModal(true);
    } else {
      setQuestionIndex(questionIndex + 1);
    }
  };

  return (
    <div className="container relative mx-auto flex h-screen flex-col p-4">
      <header>JavaScript Quiz Playground Score: {score}</header>
      <div className="flex h-full justify-between">
        {questions.length && (
          <Question
            setScore={setScore}
            index={questionIndex}
            setShowNext={setShowNext}
            question={questions[questionIndex]}
          />
        )}
        <button onClick={handleNext}>
          <img src={RightArrowIcon} className="nav-btn" />
        </button>
      </div>
      {showNext && (
        <div className="mt-3 flex justify-between gap-4">
          <button className="mb-4 flex-1" onClick={handleNext}>
            <img src={RightArrowIcon} className="mobile-nav-btn" />
          </button>
        </div>
      )}
      {showModal && (
        <div className="absolute inset-0 bg-slate-500 p-8 text-center">
          This is a mock modal
          <div>Your score is: {score}/15</div>
          <button onClick={() => setShowModal(false)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default App;
