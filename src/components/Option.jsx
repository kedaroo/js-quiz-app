import React, { useState } from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";

export default function Option({ option }) {
  const [isCorrect, setIsCorrect] = useState("");

  const handleClick = () => {
    option.correct ? setIsCorrect("bg-green-400") : setIsCorrect("bg-red-400");
  };

  return (
    <button
      className={`option ${isCorrect}`}
      onClick={handleClick}
    >
      <ReactMarkdown>{option.text}</ReactMarkdown>
    </button>
  );
}

Option.propTypes = {
  option: PropTypes.object.isRequired,
};
